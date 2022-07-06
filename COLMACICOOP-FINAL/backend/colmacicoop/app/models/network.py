from django.db import models
from django.contrib import admin

class Network(models.Model):

    url = models.TextField()
    
    ICONS = [
        ('fa-facebook', 'Facebook'),
        ('fa-linkedin', 'Linkedin'),
        ('fa-instagram', 'Instagram'),
        ('fa-whatsapp', 'Whatsapp'),
    ]

    icon = models.CharField(max_length=50, choices=ICONS)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Redes'
        verbose_name_plural = 'Redes'

    def __str__(self):
        return self.get_icon_display()

class NetworkAdmin(admin.ModelAdmin):
    list_display = ('red', 'created', 'updated')

    @admin.display(empty_value='???')
    def red(self, obj):
        return obj.get_icon_display()

    @admin.display(empty_value='???')
    def created(self, obj):
        return obj.created_at.strftime("%d/%m/%Y %X")

    @admin.display(empty_value='???')
    def updated(self, obj):
        return obj.updated_at.strftime("%d/%m/%Y %X")