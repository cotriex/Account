from cProfile import label
from re import A
from unicodedata import name

from django import forms

from .models import Empleado, remuneracion


class EmpleadoForm(forms.ModelForm):
    class Meta:
        model=Empleado
        fields="__all__"
        labels={
            'vigente':"Vigente",
            'tipoIdentificacion': 'Tipo de Identificación',
            'identificacion': 'Identificación',
            'identificacionIESS': 'Identificación IESS',
            'fechaNacimiento': 'fecha Nacimiento',
            'primerNombre': 'Primer Nombre',
            'segundoNombre': 'Segundo Nombre',
            'primerApellido': 'Primer Apellido',
            'segundoApellido': 'Segundo Apellido',
            'nivelInstruccion': 'Nivel de Instrucción',
            'genero': 'Género',
            'estadoCivil': 'Estado Civil',
            'fechaInicio': 'Inicio Actividades',
            'tipoContrato': 'Tipo de Contrato',
            'tipoSalario': 'Tipo de Salario',
            'salarioNominal': 'Salario Nominal',
            'departamento': 'Departamento Asignado',
            'centroCostos': 'Centro de Costos',
            'cargo': 'Cargo',
            'acumulacionXIII': 'Acumulación XIII',
            'acumulacionXIV': 'Acumulación XIV',
            'acumulacionFR': 'Acumulación Fdo Rsrva',
            'fechaFin': 'Fin de Actividades',
            'telefono': 'Teléfono',
            'direccion': 'Dirección Domiciliaria',
            'cargasFamiliares': 'Cargas Fam.',
        }
        widgets ={
            "identificacion": forms.TextInput(),
            "fechaInicio":forms.TextInput(attrs={'type': 'date','class': 'form-control  datetimepicker'}),
            "fechaFin":forms.TextInput(attrs={'type': 'date','class': 'form-control  datetimepicker'}),
            "fechaNacimiento":forms.TextInput(attrs={'type': 'date','class': 'form-control  datetimepicker'}),
            "salarioNominal":forms.TextInput(),
            'primerNombre': forms.TextInput(attrs={"oninput":"this.value = this.value.toUpperCase()"}),
            'segundoNombre': forms.TextInput(attrs={"oninput":"this.value = this.value.toUpperCase()"}),
            'primerApellido': forms.TextInput(attrs={"oninput":"this.value = this.value.toUpperCase()"}),
            'segundoApellido': forms.TextInput(attrs={"oninput":"this.value = this.value.toUpperCase()"}),
            'cargo': forms.TextInput(attrs={"oninput":"this.value = this.value.toUpperCase()"}),
            'direccion': forms.TextInput(attrs={"oninput":"this.value = this.value.toUpperCase()"}),
            "cargasFamiliares": forms.TextInput(),
            
        }

class rolEditForm(forms.ModelForm):
    class Meta:
        model=remuneracion
        fields = ("__all__")
        

class remuneracionCreateForm(forms.ModelForm):
    class Meta:
        model=remuneracion
        fields = "__all__"
        labels={
            "identificacion":"Identificacion",
            "ano":"Año",
            "mes":"Mes",
            "dias":"Días",
            "horas25":"Horas 25%",
            "valor25":"Valor 25%",
            "horas50":"Horas 50%",
            "valor50":"Valor 50%",
            "extraHoras100":"Horas 100%",
            "valor100":"Valor 100%",
            "comisiones":"Comisiones",
            "bonoAdicional":"Bono Adicional",
            "IESSpersonal":"IESS Personal",
            "retencionIR":"Retencion IR",
            "prestamoIESS":"Prestamo IESS",
            "extConyuges":"Ext. Conyuges",
            "otrosDescuentos":"Otros Dsctos",
            "multas":"Multas",
            "anticipos":"Anticipo",
            "otrosPrestamos":"Otros Prestamos",
            "movilizacion":"Movilizacion",
            "transporte":"Transporte",
            "pagoXIII":"Pago XIII",
            "pagoXIV":"PagoXIV",
            "pagoFR":"Pago Fdo Resrva",
            "pagoVacaciones":"Pago Vacaciones",
            "pagoprestIESS": "Pago Prestamo IESS",
            "pagoExtCony" :"Pago Extension Conyuges",
            "pagoIESS": "Pago IESS",
            "valorXIII":"Gasto XIII",
            "valorXIV":"Gasto XIV",
            "vacaciones":"Gasto Vacaciones",
            "fondoReserva":"Gastos Fdo Resrva",
            "IESSpatr":"IESS Patronal",
            
        }
        widgets ={
            "identificacion": forms.Select(attrs={"class": "form-control select2 select  "}),
            "mes": forms.Select(attrs={"style": "border: none; border-bottom: 1px solid blue",
            "class": "form-control"}),
            "ano": forms.Select(attrs={"style": "border: none; border-bottom: 1px solid blue",
            "class": "form-control"}),
            "dias":forms.TextInput(attrs={"class": "form-control",
            "style": "border: none; border-bottom: 1px solid green"}),
            "valor25":forms.TextInput(attrs={"class": "form-control",
            "style": "border: none; border-bottom: 1px solid green"}),
            "valor50":forms.TextInput(attrs={"class": "form-control",
            "style": "border: none; border-bottom: 1px solid green"}),
            "valor100":forms.TextInput(attrs={"class": "form-control",
            "style": "border: none; border-bottom: 1px solid green"}),

            "horas25":forms.TextInput(attrs={"class": "form-control",
            "style": " border-bottom: 1px solid blue"}),
            "horas50":forms.TextInput(attrs={"class": "form-control",
            "style": " border-bottom: 1px solid blue"}),
            "extraHoras100":forms.TextInput(attrs={"class": "form-control",
            "style": " border-bottom: 1px solid blue"}),
            "comisiones":forms.TextInput(attrs={"class": "form-control",
            "style": " border-bottom: 1px solid blue"}),
            "bonoAdicional":forms.TextInput(attrs={"class": "form-control",
            "style": " border-bottom: 1px solid blue"}),


            "IESSpersonal":forms.TextInput(attrs={"class": "form-control",
            "style": "border: none; border-bottom: 1px solid green"}),
            "retencionIR":forms.TextInput(attrs={"class": "form-control",
            "style": " border-bottom: 1px solid blue"}),
            "prestamoIESS":forms.TextInput(attrs={"class": "form-control",
            "style": " border-bottom: 1px solid blue"}),
            "extConyuges":forms.TextInput(attrs={"class": "form-control",
            "style": " border-bottom: 1px solid blue"}),
            "otrosDescuentos":forms.TextInput(attrs={"class": "form-control",
            "style": " border-bottom: 1px solid blue"}),
            "multas":forms.TextInput(attrs={"class": "form-control",
            "style": " border-bottom: 1px solid blue"}),
            "anticipos":forms.TextInput(attrs={"class": "form-control",
            "style": " border-bottom: 1px solid blue"}),
            "otrosPrestamos":forms.TextInput(attrs={"class": "form-control",
            "style": " border-bottom: 1px solid blue"}),
            "transporte":forms.TextInput(attrs={"class": "form-control",
            "style": " border-bottom: 1px solid blue"}),
            "movilizacion":forms.TextInput(attrs={"class": "form-control",
            "style": " border-bottom: 1px solid blue"}),
           
            "pagoXIII":forms.TextInput(attrs={"style": "border: none; border-bottom: 1px solid green",
            "readonly": ""}),
            "pagoXIV":forms.TextInput(attrs={"style": "border: none; border-bottom:  1px solid green",
            "readonly": ""}),
            "pagoVacaciones":forms.TextInput(attrs={"style": "border: none; border-bottom: 1px solid green",
            "readonly": ""}),
            "pagoFR":forms.TextInput(attrs={"style": "border: none; border-bottom: 1px solid green",
            "readonly": ""}),
            "pagoprestIESS": forms.TextInput(attrs={"class": "form-control",
            "style": " border-bottom: 1px solid blue"}),
            "pagoExtCony" : forms.TextInput(attrs={"class": "form-control",
            "style": " border-bottom: 1px solid blue"}),
            "pagoIESS": forms.TextInput(attrs={"class": "form-control",
            "style": " border-bottom: 1px solid blue"}),

            "valorXIII":forms.TextInput(attrs={"style": "border: none; border-bottom: 1px solid green",
            "readonly": ""}),
            "valorXIV":forms.TextInput(attrs={"style": "border: none; border-bottom: 1px solid green",
            "readonly": ""}),
            "vacaciones":forms.TextInput(attrs={"style": "border: none; border-bottom: 1px solid green",
            "readonly": ""}),
            "fondoReserva":forms.TextInput(attrs={"style": "border: none; border-bottom: 1px solid green",
            "readonly": ""}),
            "IESSpatr":forms.TextInput(attrs={"style": "border: none; border-bottom: 1px solid green",
            "readonly": ""}),
            
        }