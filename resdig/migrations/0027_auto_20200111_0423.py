# Generated by Django 3.0.2 on 2020-01-11 04:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resdig', '0026_auto_20200111_0417'),
    ]

    operations = [
        migrations.AlterField(
            model_name='donor',
            name='time',
            field=models.FloatField(default=1578716593.5640295, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='keyword',
            name='lastDigTime',
            field=models.FloatField(default=1578716593.5629935),
        ),
    ]