from django import forms

from .models import *

class itemsCreateForm(forms.ModelForm):
    
    ctaInventario = forms.ModelChoiceField(queryset=planCuentas.objects.filter(tipoCuenta="D"),required = False, widget=forms.Select(attrs={"class": "form-control select2 select"}))
    ctaCostos = forms.ModelChoiceField(queryset=planCuentas.objects.filter(tipoCuenta="D"),required = False,widget=forms.Select(attrs={"class": "form-control select2 select"}))
    ctaIngresos = forms.ModelChoiceField(queryset=planCuentas.objects.filter(tipoCuenta="D"),required = False,widget=forms.Select(attrs={"class": "form-control select2 select"}))
    ctaGastos = forms.ModelChoiceField(queryset=planCuentas.objects.filter(tipoCuenta="D"),required = False,widget=forms.Select(attrs={"class": "form-control select2 select"}))

    class Meta:
        model=items
        fields = ("__all__")
        widgets={
            "codigo": forms.TextInput(attrs={"onkeypress":"return numero(event)"}),
            "descripcion": forms.TextInput(attrs={"oninput":"this.value = this.value.toUpperCase()"}),
        }
       
    
class planCuentasCreateForm(forms.ModelForm):
    tipoCuenta = forms.ChoiceField(choices=TIPOCUENTA)
    class Meta:
        model=planCuentas
        fields = ("__all__")
        widgets={
            
            'cuenta': forms.TextInput(attrs={"data-mask":"0.0.0.00.00.000"}),
            'descripcion': forms.TextInput(attrs={"oninput":"this.value = this.value.toUpperCase()"}),
            'ctaAcumulacion': forms.TextInput(attrs={"readonly":"true"}),
            'nivel': forms.Select(attrs={"style":"pointer-events: none"}),
        }