from django.db import models

# Create your models here.

class tuyendung(models.Model):
    title = models.CharField(max_length=100, blank=True, null=True)
    where = models.CharField(max_length=50, blank=True, null=True)
    workplace = models.CharField(max_length=50, blank=True, null=True)
    price = models.CharField(max_length=50, blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)
    link_lk = models.CharField(max_length=100, blank=True, null=True)
