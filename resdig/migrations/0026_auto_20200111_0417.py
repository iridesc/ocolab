# Generated by Django 3.0.2 on 2020-01-11 04:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resdig', '0025_auto_20200111_0353'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Feedback',
        ),
        migrations.DeleteModel(
            name='Msg',
        ),
        migrations.AlterField(
            model_name='donor',
            name='time',
            field=models.FloatField(default=1578716240.108161, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='keyword',
            name='lastDigTime',
            field=models.FloatField(default=1578716240.1069129),
        ),
    ]