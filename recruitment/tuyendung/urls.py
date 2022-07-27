from django.urls import path
from .views import detail, recruitment

urlpatterns = [
    path('detail', detail ),
    path('', recruitment)
    ]