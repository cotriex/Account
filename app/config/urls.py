from django.urls import path, include
from django.contrib.auth.decorators import login_required
from .views import *
app_name = "config"

urlpatterns = [
    path ('config/', login_required(ConfigListView.as_view()), name='config'),
    path ('crearcentro/', login_required(centroCostosCreateView.as_view()), name='creaCentro'),
    path ('editacentro/<pk>/', login_required(centroCostosUpdateView.as_view()), name='editacentro'),
    path ('eliminacentro/<int:id>/', login_required(centroCostosDeleteView), name='eliminacentro'),

    path ('creardpto/', login_required(departamentoCreateView.as_view()), name='creadpto'),
    path ('editadpto/<pk>/', login_required(departamentoUpdateView.as_view()), name='editadpto'),
    path ('eliminadpto/<int:id>/', login_required(departamentoDeleteView), name='eliminadpto'),

    path ('crearcia/', login_required(companiaCreateView.as_view()), name='creacia'),
    path ('editacia/<pk>/', login_required(companiaUpdateView.as_view()), name='editacia'),
    path ('eliminacia/<int:id>/', login_required(companiaDeleteView), name='eliminacia'),

    path ('compania/', login_required(companiaListView.as_view()), name='compania'),

    path ('creardcto/', login_required(documentoCreateView.as_view()), name='creadcto'),
    path ('editadcto/<pk>/', login_required(documentoUpdateView.as_view()), name='editadcto'),
    path ('eliminadcto/<int:id>/', login_required(documentoDeleteView), name='eliminadcto'),

    path ('creartitem/', login_required(tipoItemCreateView.as_view()), name='creatitem'),
    path ('editatitem/<pk>/', login_required(tipoItemUpdateView.as_view()), name='editatitem'),
    path ('eliminatitem/<int:id>/', login_required(tipoItemDeleteView), name='eliminatitem'),
    
]