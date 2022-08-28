from django.db import models

# Create your models here.
AÑO = [
    ("2021", 2021),
    ("2022", 2022),
]

MES = [
    ("01", "ENERO"),
    ("02","FEBRERO"),
    ("03", "MARZO"),
    ("04","ABRIL"),
    ("05", "MAYO"),
    ("06","JUNIO"),
    ("07", "JULIO"),
    ("08","AGOSTO"),
    ("09", "SEPTIEMBRE"),
    ("10","OCTUBRE"),
    ("11", "NOVIEMBRE"),
    ("12","DICIEMBRE"),
]

GENERO = [
    ("1", "FEMENINO"),
    ("2","MASCULINO"),
]

ACUMULACION = [
    ("1", "NO ACUMULA"),
    ("2","EMPRESA"),
    ("3","IESS"),
]

TIPOSALARIO = [
    ("1", "CON SALARIO NETO"),
    ("2","SIN SALARIO NETO"),
]

TIPOCONTRATO = [
    ("1","Indefinido"),
    ("2","Obra Cierta"),
    ("3","Jornada Parcial Permanente"),
    ("4","Eventual Continuo"),
    ("5","Eventual Discontinuo"),
    ("6","De Temporada"),
    ("7","De Aprendizaje"),

]
ESTADO = [
    ("1", "SOLTERO"),
    ("2","CASADO"),
    ("2","DIVORCIADO"),
    ("2","VIUDO"),
    ("2","UNION DE HECHO"),
]

INSTRUCCION = [
    ("1","PRIMARIA"),
    ("2","SECUNDARIA"),
    ("3","TECER NIVEL"),
    ("4","CUARTO NIVEL"),
    ("5", "PHD"),

]

TIPOCONTRIB = [
('1', 'Sector Publico'),
('2', 'Contribuyente Especial'),
('3', 'Regimen General'),
('4', 'Regimen RIMPE'),
('5', 'Negocio Popular RIMPE'),
]

IDENTIFICACIONES = [
    ('1', 'RUC'),
    ('2', 'CEDULA'),
    ('3', 'PASAPORTE'),
    ('4', 'ID DEL EXTERIOR'),
    ]

class departamento(models.Model):
    descripcion = models.CharField(max_length=100,unique=True, verbose_name='Departamento')

    def __str__(self) -> str:
        return self.descripcion

    class Meta:
        verbose_name = "Departamento"
        verbose_name_plural = "Departamentos"

class centrocostos(models.Model):
    descripcion = models.CharField(max_length=100, unique=True, verbose_name='Centro de Costos')

    def __str__(self) -> str:
        return self.descripcion

    class Meta:
        verbose_name = "Centro de Costo"
        verbose_name_plural = "Centro de Costos"


class compania (models.Model):
    identificacion = models.CharField(max_length=13, unique=True, verbose_name='Identificacion')
    razonSocial = models.CharField(max_length=100, verbose_name='Razon Social')
    nombreComercial = models.CharField(max_length=100, verbose_name='Nombre Comercial')
    tipoContribuyente = models.CharField(max_length=2, choices=TIPOCONTRIB, verbose_name='Tipo de Contribuyente')
    llevaContabilidad = models.BooleanField(verbose_name='Lleva Contabilidad')
    direccion = models.CharField(max_length=255, verbose_name='Direccion Compañia')
    establecimiento = models.CharField(max_length=4, default="0001", verbose_name='Establecimiento')

    def __str__(self) -> str:
        return self.razonSocial

class Documento (models.Model):
    codigo = models.CharField(max_length=2, primary_key=True, verbose_name='Código')
    descripcion = models.CharField(max_length=100, verbose_name='Documento')
    

    def __str__(self) -> str:
        return self.codigo + "--" + self.descripcion


class tipoItem(models.Model):
   
    descripcion = models.CharField(max_length=100, verbose_name='Descripcion')
    activo=models.BooleanField(default=True)
    def __str__(self) -> str:
        return self.descripcion
