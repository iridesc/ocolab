# Generated by Django 2.2.2 on 2019-12-08 16:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resdig', '0014_auto_20191208_1358'),
    ]

    operations = [
        migrations.AlterField(
            model_name='donate',
            name='time',
            field=models.FloatField(default=1575821591.062632, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='feedback',
            name='time',
            field=models.FloatField(default=1575821591.0614204),
        ),
        migrations.AlterField(
            model_name='keyword',
            name='dbId',
            field=models.CharField(default=None, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='msg',
            name='time',
            field=models.FloatField(default=1575821591.0618262),
        ),
    ]
