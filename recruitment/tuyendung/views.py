from django.shortcuts import render
from .models import tuyendung
# Create your views here.
def index(request):
    thongtin = tuyendung.objects.all()
    return render(request, 'tuyendung/index.html', {'thongtin' : thongtin} )

def detail(request):
    thongtin = tuyendung.objects.all()
    return render(request, 'tuyendung/detail.html', {'thongtin' : thongtin} )

def recruitment(request):
    thongtin = tuyendung.objects.all()
    count_tq = tuyendung.objects.all().count()
    count_hn = tuyendung.objects.filter(
        where = 'Hà Nội').count()
    count_hcm = tuyendung.objects.filter(
        where='Hồ Chí Minh').count()
    count_bd = tuyendung.objects.filter(
        where='Bình Dương').count()
    count_qn = tuyendung.objects.filter(
        where='Quảng Ninh').count()
    count_hp = tuyendung.objects.filter(
        where='Hải Phòng').count()
    return render(request, 'tuyendung/recruitment.html', {'thongtin' : thongtin, 'count_hn' : count_hn, 'count_tq' : count_tq,
                                                          'count_hcm' : count_hcm, 'count_bd' : count_bd, 'count_qn' : count_qn,
                                                          'count_hp' : count_hp} )