from django.urls import path, include
from django.contrib.auth.decorators import login_required
from .views import *
app_name = "empleados"

urlpatterns = [
    path ('listarEmpleados', login_required(empleadoListView.as_view()), name='listaEmpleado'),
    path ('crearempleado/', login_required(empleadoCreateView.as_view()), name='creaEmpleado'),
    path ('editaEmpleados/<pk>/', login_required(empleadoEditView.as_view()), name='editarEmpleado'),
    path ('deleteEmpleado/<int:id>/', login_required(empleadoDeleteView), name='deleteEmpleado'),
    path ('listarNominas/', login_required(remuneracionListView.as_view()), name='listaNominas'),
    path ('listarNomina/', login_required(remuneracionListViews.as_view()), name='listaNomina'),
    path ('listarProvisiones/', login_required(ProvisionesListViews.as_view()), name='listarProvisiones'),
    path ('listarAportes/', login_required(AportesListViews.as_view()), name='listarAportes'),
    path ('IESS/', login_required(IESSListViews.as_view()), name='IESS'),
    path ('creaRol/', login_required(remuneracionCreateView.as_view()), name='creaRol'),
    path ('editaRol/<pk>/', login_required(rolEditView.as_view()), name='editaRol'),
    path ('eliminaRol/<int:id>/', login_required(rolDeleteView), name='eliminaRol'),
    path ('empleadorol/', login_required(empleadosprocess), name='empleadorol'),
    path ('verRol/<pk>/', login_required(rolVerView.as_view()), name='verRol'),
    path ('valoresNomina/', login_required(valoresNomina), name='valoresNomina'),
    
   
    
    
]