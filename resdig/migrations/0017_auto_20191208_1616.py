# Generated by Django 2.2.2 on 2019-12-08 16:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resdig', '0016_auto_20191208_1616'),
    ]

    operations = [
        migrations.AlterField(
            model_name='donate',
            name='time',
            field=models.FloatField(default=1575821786.0769842, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='feedback',
            name='time',
            field=models.FloatField(default=1575821786.0754538),
        ),
        migrations.AlterField(
            model_name='msg',
            name='time',
            field=models.FloatField(default=1575821786.0763636),
        ),
    ]