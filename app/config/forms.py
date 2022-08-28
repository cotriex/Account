from django import forms

from .models import *

class departamentoCreateForm(forms.ModelForm):
    class Meta:
        model=departamento
        fields = ("__all__")

class centrocostosCreateForm(forms.ModelForm):
    class Meta:
        model=centrocostos
        fields = ("__all__")

class companiaCreateForm(forms.ModelForm):
    class Meta:
        model=compania
        fields = ("__all__")


class documentoCreateForm(forms.ModelForm):
    class Meta:
        model=Documento
        fields = ("__all__")

class tipoItemCreateForm(forms.ModelForm):
    class Meta:
        model=tipoItem
        fields = ("__all__")

        