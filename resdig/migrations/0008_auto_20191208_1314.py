# Generated by Django 2.2.2 on 2019-12-08 13:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resdig', '0007_auto_20191208_1313'),
    ]

    operations = [
        migrations.AlterField(
            model_name='donate',
            name='time',
            field=models.FloatField(default=1575810866.852512, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='feedback',
            name='time',
            field=models.FloatField(default=1575810866.851566),
        ),
        migrations.AlterField(
            model_name='msg',
            name='time',
            field=models.FloatField(default=1575810866.8518815),
        ),
    ]