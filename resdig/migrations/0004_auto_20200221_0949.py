# Generated by Django 3.0.3 on 2020-02-21 09:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resdig', '0003_auto_20200221_0948'),
    ]

    operations = [
        migrations.AlterField(
            model_name='donor',
            name='time',
            field=models.FloatField(default=1582278597.9015443, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='keyword',
            name='lastDigTime',
            field=models.FloatField(default=1582278597.9005017),
        ),
    ]