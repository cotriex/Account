from django.shortcuts import render, redirect, HttpResponse
from django.views.generic import View, UpdateView, CreateView, DetailView, ListView
from .forms import *
from .manager import*
from .models import *
from django.contrib import messages
from django.urls import reverse_lazy
import json
from django.http import JsonResponse
from django.db.models import Q 

class itemsListView (View):
    def get (self, request, *args, **kwargs):
        item = items.objects.all().order_by("codigo")
        context= {
            "form": item,
        }
        return render(request, 'transacciones/items.html', context)

class itemsCreateView (CreateView):
    model = items
    form_class = itemsCreateForm
    template_name = "transacciones/crearitem.html"
    success_url= reverse_lazy("transacciones:items")


class itemsUpdateView(UpdateView):
    model = items
    form_class = itemsCreateForm
    template_name = "transacciones/editaitem.html"
    success_url= reverse_lazy("transacciones:items")

def itemsDeleteView (request, pk):
   item = items.objects.get(codigo = pk)
   item.delete()
   messages.success(request, "Eliminado Correctamente")

   return redirect('transacciones:items')

class planCuentasListView (View):
    def get (self, request, *args, **kwargs):
        planCuenta = planCuentas.objects.all().order_by("cuenta")
        context= {
            "form": planCuenta,
        }
        return render(request, 'transacciones/planCuentas.html', context)

class planCuentasCreateView (CreateView):
    model = planCuentas
    form_class = planCuentasCreateForm
    template_name = "transacciones/crearcuenta.html"
    success_url= reverse_lazy("transacciones:planCuentas")
    

class planCuentasUpdateView(UpdateView):
    model = planCuentas
    form_class = planCuentasCreateForm
    template_name = "transacciones/editacuenta.html"
    success_url= reverse_lazy("transacciones:planCuentas")

def planCuentasDeleteView (request, pk):
   planCuenta = planCuentas.objects.get(cuenta = pk)
   planCuenta.delete()
   messages.success(request, "Eliminado Correctamente")

   return redirect('transacciones:planCuentas')

def planCuentasprocess(request):
    context = {}
    if request.method == 'POST':
            body_unicode = request.body.decode('utf-8')
            received_json = json.loads(body_unicode)
            print(received_json)
            ident = received_json["id"]
            print (ident)
            data = planCuentas.objects.filter(cuenta = ident).only()
            data = list(data.values())
            print(data)
            if len(data)==0:
                data=[]
                cuenta={}
                cuenta["cuenta"] = "No existe"
                data.append(cuenta)
                print(data)
                context={
                "data" : data
            }
                return JsonResponse(context)
                
            else:
                context={
                "data" : data
                }
                return JsonResponse(context)
                
    # nothing went well
    return HttpResponse(context)