from django.urls import path
from . import views


urlpatterns = [
    path('', views.home),
    path('login', views.authenticate),
    path('register', views.register),
    path('log', views.login),
    path('jobs', views.jobs),
    path('jobs/<str:pk>', views.application_page)

]