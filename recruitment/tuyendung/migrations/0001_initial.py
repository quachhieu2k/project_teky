# Generated by Django 4.0.6 on 2022-07-25 07:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='tuyendung',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=200, null=True)),
                ('where', models.CharField(blank=True, max_length=50, null=True)),
                ('workplace', models.CharField(blank=True, max_length=50, null=True)),
                ('price', models.CharField(blank=True, max_length=50, null=True)),
                ('link_lk', models.CharField(blank=True, max_length=100, null=True)),
            ],
        ),
    ]