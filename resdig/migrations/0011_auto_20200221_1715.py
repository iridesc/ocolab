# Generated by Django 3.0.3 on 2020-02-21 17:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resdig', '0010_auto_20200221_1709'),
    ]

    operations = [
        migrations.AlterField(
            model_name='donor',
            name='time',
            field=models.FloatField(default=1582305319.8467658, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='keyword',
            name='lastDigTime',
            field=models.FloatField(default=1582305319.8450358),
        ),
        migrations.AlterField(
            model_name='keyword',
            name='lastVisitTime',
            field=models.FloatField(default=1582305319.8450751),
        ),
        migrations.AlterField(
            model_name='keyword',
            name='visitTimes',
            field=models.IntegerField(),
        ),
    ]