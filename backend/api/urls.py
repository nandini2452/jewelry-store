from django.urls import path
from .views import banner_list, login

urlpatterns = [

    path('banners/', banner_list),

    path('login/', login),

]