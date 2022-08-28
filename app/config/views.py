from django.shortcuts import render

# Create your views here.

from django.shortcuts import render, redirect
from django.views.generic import View, CreateView, UpdateView, ListView
from .forms import *
from .models import *
from django.urls import reverse_lazy
from django.contrib import messages
from django.http import JsonResponse
# Create your views here.

class ConfigListView (View):
    def get (self, request, *args, **kwargs):
        form1 = centrocostos.objects.all().order_by("id")
        form2 = departamento.objects.all().order_by("id")
        form3 = compania.objects.all().order_by("id")
        form4 = Documento.objects.all().order_by("codigo")
        form5 = tipoItem.objects.all().order_by("id")
        context= {
            
            "form1": form1,
            "form2": form2,
            "form3": form3,
            "form4": form4,
            "form5": form5,
            
        }
        return render(request, 'configuraciones/config.html', context)


class centroCostosCreateView (CreateView):
    model = centrocostos
    form_class = centrocostosCreateForm
    template_name = "configuraciones/crearcentro.html"
    success_url= reverse_lazy("config:config")


class centroCostosUpdateView(UpdateView):
    model = centrocostos
    form_class = centrocostosCreateForm
    template_name = "configuraciones/editacentro.html"
    success_url= reverse_lazy("config:config")

def centroCostosDeleteView (request, id):
   empleado = centrocostos.objects.get(id = id)
   empleado.delete()
   messages.success(request, "Eliminado Correctamente")

   return redirect('config:config')

class departamentoCreateView (CreateView):
    model = departamento
    form_class = departamentoCreateForm
    template_name = "configuraciones/creardpto.html"
    success_url= reverse_lazy("config:config")


class departamentoUpdateView(UpdateView):
    model = departamento
    form_class = departamentoCreateForm
    template_name = "configuraciones/editadpto.html"
    success_url= reverse_lazy("config:config")

def departamentoDeleteView (request, id):
   empleado = departamento.objects.get(id = id)
   empleado.delete()
   messages.success(request, "Eliminado Correctamente")

   return redirect('config:config')

class companiaCreateView (CreateView):
    model = compania
    form_class = companiaCreateForm
    template_name = "configuraciones/crearcia.html"
    success_url= reverse_lazy("config:config")


class companiaUpdateView(UpdateView):
    model = compania
    form_class = companiaCreateForm
    template_name = "configuraciones/editacia.html"
    success_url= reverse_lazy("config:config")

def companiaDeleteView (request, id):
   empleado = compania.objects.get(id = id)
   empleado.delete()
   messages.success(request, "Eliminado Correctamente")

   return redirect('config:config')


class companiaListView (ListView):
    model = compania
    template_name = "nomina/listaremuneracion.html"
    def get(self, request, *args, **kwargs):
        
        data=[]
        
        cia = compania.objects.all()
        for a in cia:
           
            id_cia = a.identificacion
            rs_cia = a.razonSocial
            estab_cia = a.establecimiento
            compañia = {
                "id_cia": id_cia,
                "id_rs": rs_cia,
                "estab": estab_cia,
            }
            data.append(compañia)

        return JsonResponse(data, safe=False)


class documentoCreateView (CreateView):
    model = Documento
    form_class = documentoCreateForm
    template_name = "configuraciones/creardcto.html"
    success_url= reverse_lazy("config:config")


class documentoUpdateView(UpdateView):
    model = Documento
    form_class = documentoCreateForm
    template_name = "configuraciones/editadcto.html"
    success_url= reverse_lazy("config:config")

def documentoDeleteView (request, id):
   empleado = Documento.objects.get(id = id)
   empleado.delete()
   messages.success(request, "Eliminado Correctamente")

   return redirect('config:config')



class tipoItemCreateView (CreateView):
    model = tipoItem
    form_class = tipoItemCreateForm
    template_name = "configuraciones/creartitem.html"
    success_url= reverse_lazy("config:config")


class tipoItemUpdateView(UpdateView):
    model = tipoItem
    form_class = tipoItemCreateForm
    template_name = "configuraciones/editatitem.html"
    success_url= reverse_lazy("config:config")

def tipoItemDeleteView (request, id):
   empleado = tipoItem.objects.get(id = id)
   empleado.delete()
   messages.success(request, "Eliminado Correctamente")

   return redirect('config:config')