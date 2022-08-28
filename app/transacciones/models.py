from calendar import c
from datetime import datetime
from django.db import models
from app.config.models import *
from django.core.validators import MaxValueValidator

SIGNO =[
    ("P", "Positivo"),
    ("N", "Negativo"),
]
TIPOCUENTA = [
    ("Acm", "Acumulación"),
    ("EyE", "Efectivo y Equivalentes"),
    
]
NIVEL =[
    ("1","Nivel1"),
    ("2","Nivel2"),
    ("3","Nivel3"),
    ("4","Nivel4"),
    ("5","Nivel5"),
    ("6","Nivel6"),
]
TIPOESTADO=[
    ("1","Estado Situacion Financiera"),
    ("2", "Estado de Resultados Integrales"),
    ("3", "Estado de Flujos de Efectivo"),
    ("4", "Estado de Cambios en el Patrimonio"),

    ]

class planCuentas(models.Model):
    cuenta = models.CharField(primary_key=True, max_length=20, verbose_name="Cuenta")
    descripcion=models.CharField( max_length=200, verbose_name="Descripción")
    signo= models.CharField( max_length=20, verbose_name="Signo", choices=SIGNO)
    tipoCuenta= models.CharField(max_length=20, verbose_name="Tipo de Cuenta", choices=TIPOCUENTA)
    nivel=models.CharField(max_length=20, verbose_name="Nivel", choices=NIVEL)
    tipoEstado=models.CharField( max_length=20, verbose_name="Tipo de Estado", choices=TIPOESTADO)
    ctaAcumulacion=models.CharField(max_length=20, verbose_name="Cuenta ACM", blank=True, null=True)
    activo=models.BooleanField(default=True, verbose_name="Estado")

    def __str__(self):
        
        return self.cuenta+" - " + self.descripcion 
    class Meta:
        
        verbose_name = "Cuenta Contable"
        verbose_name_plural = "Plan de Cuentas"
class items(models.Model):
    codigo = models.CharField(primary_key=True, max_length=20, verbose_name="Código")
    activo=models.BooleanField(default=True, verbose_name="Estado")
    inventario=models.BooleanField(default=True, verbose_name="Inventario")
    tipoItem=models.ForeignKey(tipoItem, max_length=10, verbose_name="Tipo de Item",on_delete=models.CASCADE)
    descripcion=models.CharField( max_length=200, verbose_name="Descripción")
    IVA = models.CharField( max_length=200, verbose_name="IVA")
    ctaInventario = models.ForeignKey( planCuentas,max_length=200, on_delete=models.SET_NULL,verbose_name="Cuenta Inventario", related_name="CuentaInventario", null=True, blank=True)
    ctaCostos = models.ForeignKey( planCuentas,on_delete=models.SET_NULL, max_length=200, verbose_name="Cuenta Costos", related_name="CuentaCostos", null=True, blank=True)
    ctaIngresos = models.ForeignKey( planCuentas,max_length=200,on_delete=models.SET_NULL, verbose_name="Cuenta Ingresos", related_name="CuentaIngresos", null=True, blank=True)
    ctaGastos = models.ForeignKey( planCuentas,max_length=200,on_delete=models.SET_NULL, verbose_name="Cuenta Gastos", related_name="CuentaGastos", null=True, blank=True)

    def __str__(self):
        return self.codigo+" - " + self.descripcion 
    class Meta:
        verbose_name = "Item"
        verbose_name_plural = "Items"
   