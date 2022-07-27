from django.db import models

# Create your models here.
class congviec(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    requirements = models.TextField(blank=True, null=True)

class tuyendung(models.Model):
    title = models.CharField(max_length=100, blank=True, null=True)
    where = models.CharField(max_length=100, blank=True, null=True)
    workplace = models.CharField(max_length=50, blank=True, null=True)
    price = models.CharField(max_length=50, blank=True, null=True)
    amount = models.CharField(max_length=100, blank=True, null=True)
    end_date = models.DateField(blank=False, null=True)
    parent = models.ForeignKey(congviec, on_delete = models.CASCADE, blank = True, null = True)


