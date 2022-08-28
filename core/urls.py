"""core URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path, include
from django.contrib import admin
from .views import Homeview

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', Homeview.as_view(), name = 'home'),
    path ('empleados/', include('app.empleados.urls', namespace='empleados')),
    path ('configuraciones/', include('app.config.urls', namespace='config')),
    path ('transacciones/', include('app.transacciones.urls', namespace='transacciones')),
    path ('', include('app.usuarios.urls', namespace='usuarios')),
    
    
]
