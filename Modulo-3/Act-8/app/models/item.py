from django.db import models
from .order import Order

class Item(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    description = models.CharField(max_length=50)
    value = models.PositiveIntegerField()
    amount = models.PositiveIntegerField()