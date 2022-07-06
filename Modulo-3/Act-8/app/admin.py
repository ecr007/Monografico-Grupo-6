from django.contrib import admin
from app.models import *

# Register your models here.
admin.site.register(Client)
admin.site.register(Phone)
admin.site.register(Country)
admin.site.register(Address)
admin.site.register(Order)
admin.site.register(Item)