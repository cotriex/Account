from django.urls import path, include
from django.contrib.auth.decorators import login_required
from .views import *
app_name = "transacciones"


urlpatterns = [
    path ('items/', login_required(itemsListView.as_view()), name='items'),
    path ('crearitem/', login_required(itemsCreateView.as_view()), name='creaitem'),
    path ('editaitem/<pk>/', login_required(itemsUpdateView.as_view()), name='editaitem'),
    path ('eliminaitem/<pk>/', login_required(itemsDeleteView), name='eliminaitem'),

    path ('planCuentas/', login_required(planCuentasListView.as_view()), name='planCuentas'),
    path ('crearcuenta/', login_required(planCuentasCreateView.as_view()), name='creacuenta'),
    path ('editarcuenta/<pk>/', login_required(planCuentasUpdateView.as_view()), name='editacuenta'),
    path ('eliminacuenta/<pk>/', login_required(planCuentasDeleteView), name='eliminacuenta'),
    path ('planCuentasprocess/', login_required(planCuentasprocess), name='planCuentasprocess'),

]