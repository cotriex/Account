# Generated by Django 4.0.6 on 2022-08-22 21:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('transacciones', '0003_alter_items_tipoitem'),
    ]

    operations = [
        migrations.AlterField(
            model_name='plancuentas',
            name='tipoCuenta',
            field=models.CharField(choices=[('Acm', 'Acumulación'), ('EyE', 'Efectivo y Equivalentes')], max_length=20, verbose_name='Tipo de Cuenta'),
        ),
        migrations.AlterField(
            model_name='plancuentas',
            name='tipoEstado',
            field=models.CharField(choices=[('1', 'Estado Situacion Financiera'), ('2', 'Estado de Resultados Integrales'), ('3', 'Estado de Flujos de Efectivo'), ('4', 'Estado de Cambios en el Patrimonio')], max_length=20, verbose_name='Tipo de Estado'),
        ),
    ]