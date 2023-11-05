from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Jobs, User


# Create your views here.

def home(request):
    return HttpResponse('<h1>Job Portal Website</h1>')


def authenticate(request):
    return render(request, 'authenticate.html')


def register(request):
    flag = False
    flag2 = False
    if request.method == 'POST':
        username = request.POST['reg-user']
        password = request.POST['reg-pwd']
        if User.objects.filter(username=username, password=password).exists():
            flag2 = True
        else:
            flag = True
            User.objects.create(username=username, password=password)
    return render(request, 'authenticate.html', {'flag': flag, 'flag2': flag2})


def login(request):
    log_flag = False
    if request.method == 'POST':
        username = request.POST['log-user']
        password = request.POST['log-pwd']
        if User.objects.filter(username=username, password=password).exists():
            return redirect('/jobs')
        else:
            log_flag = True
    print(log_flag)
    return render(request, 'authenticate.html', {'log_flag': log_flag})


def jobs(request):
    data = Jobs.objects.all().order_by('-date')
    flag = True
    query = ''
    if request.method == 'POST':
        query = request.POST['query']
        if Jobs.objects.filter(topic=query).exists():
            data = Jobs.objects.filter(topic=query).order_by('-date')
        else:
            flag = False
    Data = {'data': data, 'flag': flag, 'query': query}
    return render(request, 'jobs.html', Data)


def application_page(request, pk):
    data = Jobs.objects.filter(id=pk).values()[0]
    return render(request, 'application.html', {'data':data})
