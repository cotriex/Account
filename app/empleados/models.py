from datetime import datetime

from django.db import models
from app.config.models import *
from django.core.validators import MaxValueValidator


class Empleado(models.Model):
    vigente = models.BooleanField(default=True)
    tipoIdentificacion= models.CharField(max_length=2, default=2, choices=IDENTIFICACIONES)
    identificacion = models.CharField(max_length=10, unique=True)
    identificacionIESS = models.CharField(max_length=10)
    fechaNacimiento= models.DateField(auto_now_add=False)
    primerNombre = models.CharField(max_length=50)
    segundoNombre = models.CharField(max_length=50)
    primerApellido = models.CharField(max_length=50)
    segundoApellido = models.CharField(max_length=50)
    nivelInstruccion = models.CharField(max_length=20, choices=INSTRUCCION)
    genero = models.CharField(max_length=10, choices=GENERO)
    estadoCivil=models.CharField(max_length=20, choices=ESTADO)
    fechaInicio= models.DateField(auto_now_add=False,)
    tipoContrato =models.CharField(max_length=20, choices=TIPOCONTRATO)
    tipoSalario  =models.CharField(max_length=20, choices=TIPOSALARIO)
    salarioNominal=models.FloatField()
    departamento = models.ForeignKey(departamento, on_delete=models.CASCADE)
    centroCostos= models.ForeignKey(centrocostos, on_delete=models.CASCADE)
    cargo= models.CharField(max_length=150)
    acumulacionXIII =models.CharField(max_length=20, choices=ACUMULACION)
    acumulacionXIV =models.CharField(max_length=20, choices=ACUMULACION)
    acumulacionFR =models.CharField(max_length=20, choices=ACUMULACION)
    fechaFin= models.DateField(auto_now_add=False, null=True, blank=True)
    telefono= models.CharField(max_length=10)
    direccion = models.CharField(max_length=200)
    cargasFamiliares = models.IntegerField(default=0)

    def __str__(self) -> str:
        return self.identificacion+" - " + self.primerNombre + " " + self.segundoNombre +" " + self.primerApellido + " " + self.segundoApellido

    class Meta:
        verbose_name = "Empleado"
        verbose_name_plural = "Empleados"

class remuneracion(models.Model):
    identificacion = models.ForeignKey(Empleado, on_delete=models.CASCADE)
    ano = models.CharField(max_length=4, choices=AÑO)
    mes= models.CharField(max_length=20, choices=MES)
    dias= models.IntegerField(default=30, validators=[ MaxValueValidator(30),])
    horas25 = models.FloatField(default=0)
    valor25 = models.FloatField(default=0)
    horas50= models.FloatField(default=0)
    valor50= models.FloatField(default=0)
    extraHoras100= models.FloatField(default=0)
    valor100= models.FloatField(default=0)
    comisiones= models.FloatField(default=0)
    bonoAdicional= models.FloatField(default=0)

    IESSpersonal= models.FloatField(default=0)
    retencionIR= models.FloatField(default=0)
    prestamoIESS= models.FloatField(default=0)
    extConyuges= models.FloatField(default=0)
    otrosDescuentos= models.FloatField(default=0)
    multas= models.FloatField(default=0)
    anticipos= models.FloatField(default=0)
    otrosPrestamos= models.FloatField(default=0)
    
    movilizacion= models.FloatField(default=0)
    transporte= models.FloatField(default=0)
    pagoXIII =  models.FloatField(default=0)
    pagoXIV =  models.FloatField(default=0)
    pagoFR =  models.FloatField(default=0)
    pagoVacaciones =  models.FloatField(default=0, null=True, blank=True)
    pagoprestIESS =  models.FloatField(default=0, null=True, blank=True)
    pagoExtCony =  models.FloatField(default=0, null=True, blank=True)
    pagoIESS =  models.FloatField(default=0, null=True, blank=True)

    valorXIII= models.FloatField(default=0)
    valorXIV= models.FloatField(default=0)
    vacaciones= models.FloatField(default=0)
    fondoReserva= models.FloatField(default=0)
    IESSpatr= models.FloatField(default=0)
    
    
    


    def __str__(self) -> str:
        return str(self.identificacion)
    
    class Meta:
        verbose_name = "Remuneracion"
        verbose_name_plural = "Remuneraciones"
        unique_together = ('ano', 'mes', 'identificacion')



