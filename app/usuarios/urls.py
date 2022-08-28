from django.urls import path, include
from django.contrib.auth.views import logout_then_login
from .views import *
app_name = "usuarios"

urlpatterns = [
    path ('accounts/login/', LoginformView.as_view(), name='login'),
    path ('logout/', logout_then_login, name='logout'),
    ]