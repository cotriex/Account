# Generated by Django 4.0.6 on 2022-07-17 14:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('empleados', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='remuneracion',
            name='ano',
            field=models.CharField(choices=[('2021', 2021), ('2022', 2022)], max_length=4),
        ),
    ]
