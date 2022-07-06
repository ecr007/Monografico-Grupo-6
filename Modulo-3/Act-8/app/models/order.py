from django.db import models
from .client import Client

class Order(models.Model):
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    date = models.DateField()