from django.shortcuts import render
from .models import tuyendung
# Create your views here.
def index(request):
    thongtin = tuyendung.objects.all()
    return render(request, 'tuyendung/index.html', {'thongtin' : thongtin} )