from django.db import models
from django.contrib import admin
from tinymce.models import HTMLField

class Benefit(models.Model):

    content = HTMLField(verbose_name="Contenido")
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Beneficio'
        verbose_name_plural = 'Beneficios'

    def __str__(self):
        return "Beneficios"

class BenefitAdmin(admin.ModelAdmin):
    list_display = ('beneficios', 'created', 'updated')

    @admin.display(empty_value='???')
    def beneficios(self, obj):
        return "Beneficios"

    @admin.display(empty_value='???')
    def created(self, obj):
        return obj.created_at.strftime("%d/%m/%Y %X")

    @admin.display(empty_value='???')
    def updated(self, obj):
        return obj.updated_at.strftime("%d/%m/%Y %X")