from django.db import models


# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=101)
    password = models.CharField(max_length=43)

class Jobs(models.Model):
    topic = models.CharField(max_length=100)
    date = models.DateField()
    info = models.TextField(max_length=10000)
    company = models.CharField(null=True, max_length=100)
    about = models.TextField(null=True, max_length=10000)
    location = models.CharField(null=True, max_length=100)
    experience = models.CharField(null=True, max_length=100)
    salary = models.CharField(null=True, max_length=50)
    link = models.URLField(null=True, max_length=10000)

