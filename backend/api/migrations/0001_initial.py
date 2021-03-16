# Generated by Django 3.1.7 on 2021-03-16 18:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ApartmentsPics',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ap_number', models.SmallIntegerField(choices=[(1, '1'), (2, '2')], max_length=2)),
                ('title', models.CharField(max_length=10)),
                ('pic', models.ImageField(upload_to='photos')),
            ],
        ),
    ]
