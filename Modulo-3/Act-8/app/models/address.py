from django.db import models
from .client import Client
from .country import Country

class Address(models.Model):
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    street = models.CharField(max_length=50)
    number = models.CharField(max_length=50)
    zip_code = models.CharField(max_length=10)
    state = models.CharField(max_length=50)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)