from django.shortcuts import render, redirect, HttpResponse
from django.views.generic import View, UpdateView, CreateView, DetailView, ListView
from .forms import *
from .manager import*
from .models import Empleado, remuneracion
from django.contrib import messages
from django.urls import reverse_lazy

import json
from django.http import JsonResponse
# Create your views here.

class empleadoListView (View):
    def get (self, request, *args, **kwargs):
        model = Empleado.objects.all().order_by("id")
        context= {
            'model':model,
        }
        return render(request, 'empleados/listaEmpleados.html', context)

class empleadoCreateView (CreateView):
    model = Empleado
    
    form_class = EmpleadoForm
    template_name = "empleados/creaEmpleados.html"
    success_url= reverse_lazy("empleados:listaEmpleado")
    

class empleadoEditView (UpdateView):
    model = Empleado    
    form_class = EmpleadoForm
    template_name = "empleados/editaEmpleados.html"
    success_url= reverse_lazy("empleados:listaEmpleado")
    

def empleadoDeleteView (request, id):
   empleado = Empleado.objects.get(id = id)
   empleado.delete()
   messages.success(request, "Eliminado Correctamente")

   return redirect('empleados:listaEmpleado')


class remuneracionListView (ListView):
    model = remuneracion
    template_name = "nomina/listaremuneracion.html"
    def get(self, request, *args, **kwargs):
        
        data=[]
        rem =remuneracion.objects.all()
        emp =Empleado.objects.all()
        for r in rem:
            for e in emp:
                if r.identificacion_id == e.id:
                    ident = e.identificacion
                    identIESS = e.identificacionIESS
                    ano = r.ano
                    mes = r.mes
                    nC = str(e.primerNombre) + " " + str(e.segundoNombre)+" "+str(e.primerApellido) + " " + str(e.segundoApellido)
                    salarioNominal = float(e.salarioNominal)
                    
                    id = float(r.id)
                    dias = float(r.dias)
                    salarioMensual = float(salarioNominal/30*dias)
                    
                    totalingExtra = float(r.valor25) +float(r.valor50)+float(r.valor100)+float(r.comisiones)+float(r.bonoAdicional)
                    totalIngresos = totalingExtra+ salarioNominal
                    totalEgresos = float(r.IESSpersonal)+ float(r.retencionIR) + float(r.prestamoIESS)+ float(r.extConyuges)+ float(r.otrosDescuentos) 
                    +float(r.multas) +float(r.anticipos)+float(r.otrosPrestamos)
                    totalOtrosIngresos = float(r.movilizacion) +float(r.transporte) +float(r.pagoXIII) +float(r.pagoXIV) +float(r.pagoFR) +float(r.pagoVacaciones)
                    totalApagar = float(totalIngresos)-float(totalEgresos)+float(totalOtrosIngresos)
                    valorXIII = float(r.valorXIII)
                    pagoXIII = float(r.pagoXIII)
                    totalXIII = valorXIII - pagoXIII

                    valorXIV = float(r.valorXIV)
                    pagoXIV = float(r.pagoXIV)
                    totalXIV = valorXIV - pagoXIV

                    valorVac = float(r.vacaciones)
                    pagoVac = float(r.pagoVacaciones)
                    totalVac = valorVac - pagoVac

                    valorIESSpers = float(r.IESSpersonal) + float(r.IESSpatr)
                    pagoIESS = float(r.pagoIESS)
                    totalIESS = valorIESSpers - pagoIESS

                    fondoReserva = float(r.fondoReserva) 
                    pagoFR = float(r.pagoFR)
                    totalFR = fondoReserva - pagoFR

                    datos = {"salarioMensual": "{0:.2f}".format(salarioMensual),
                    "ano": ano,
                    "mes": mes,
                    "nC": nC,
                    "ident": ident,
                    "identIESS": identIESS,
                    "id": id,
                    "dias": dias,
                    "totalIngExtra": "{0:.2f}".format(totalingExtra),
                    "totalIngresos": "{0:.2f}".format(totalIngresos),
                    "totalEgresos": "{0:.2f}".format(totalEgresos),
                    "totalOtrosIngresos": "{0:.2f}".format(totalOtrosIngresos),
                    "totalApagar": "{0:.2f}".format(totalApagar),

                    "valorXIII": "{0:.2f}".format(valorXIII),
                    "pagoXIII": "{0:.2f}".format(pagoXIII),
                    "totalXIII": "{0:.2f}".format(totalXIII),

                    "valorXIV": "{0:.2f}".format(valorXIV),
                    "pagoXIV": "{0:.2f}".format(pagoXIV),
                    "totalXIV": "{0:.2f}".format(totalXIV),

                    "valorVac": "{0:.2f}".format(valorVac),
                    "pagoVac": "{0:.2f}".format(pagoVac),
                    "totalVac": "{0:.2f}".format(totalVac),

                    "valorIESSpers": "{0:.2f}".format(valorIESSpers),
                    "pagoIESS": "{0:.2f}".format(pagoIESS),
                    "totalIESS": "{0:.2f}".format(totalIESS),

                    "valorFR": "{0:.2f}".format(fondoReserva),
                    "pagoFR": "{0:.2f}".format(pagoFR),
                    "totalFR": "{0:.2f}".format(totalFR),
                    

                    }
                    data.append(datos)
        return JsonResponse(data, safe=False)
  

class remuneracionListViews (ListView):
    model = remuneracion
    template_name = "nomina/listaremuneracion.html"


class ProvisionesListViews (ListView):
    model = remuneracion
    template_name = "nomina/listarProvisiones.html"    


class AportesListViews (ListView):
    model = remuneracion
    template_name = "nomina/listarAportes.html"        


class IESSListViews (ListView):
    model = remuneracion
    template_name = "nomina/IESS.html"            


class remuneracionCreateView (CreateView):
    model = remuneracion   
    form_class = remuneracionCreateForm
    template_name = "nomina/creaRol.html"
    success_url= reverse_lazy("empleados:listaNomina")


class rolEditView (UpdateView):
    model = remuneracion    
    form_class = remuneracionCreateForm
    template_name = "nomina/editaRol.html"
    success_url= reverse_lazy("empleados:listaNomina")


def rolDeleteView (request, id):
   rol = remuneracion.objects.get(id = id)
   rol.delete()
   messages.success(request, "Eliminado Correctamente")

   return redirect('empleados:listaNomina')


def empleadosprocess(request):
    if request.method == 'POST':
            body_unicode = request.body.decode('utf-8')
            received_json = json.loads(body_unicode)
            print(received_json)
            ident = received_json["id"]
            data = Empleado.objects.filter(id = ident).only()
            data = list(data.values())
            print(data)
            context={
                "data" : data
            }
            return JsonResponse(context)
    # nothing went well
    return HttpResponse('FAIL!!!!!')


class rolVerView (DetailView):
    model = remuneracion    
    template_name = "nomina/verRol.html"
    
    def get_context_data(self, **kwargs):
        
        context = super(rolVerView, self).get_context_data(**kwargs)
        remu= remuneracion.objects.filter(id = self.kwargs["pk"]).order_by("id")
        print(remu)
        roles(remu, context)
        
        return context


def valoresNomina(request):
    if request.method == 'GET':
            
            data = remuneracion.objects.all().order_by("id")
            context={
                "data" : obtenerData(data, Empleado)
            }
            print(context)
             
            return JsonResponse(context)
    # nothing went well
    return HttpResponse('FAIL!!!!!')
