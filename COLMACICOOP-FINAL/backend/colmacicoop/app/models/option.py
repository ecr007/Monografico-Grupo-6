from django.db import models
from django.contrib import admin

class Option(models.Model):

    key = models.CharField(max_length=45, unique=True, verbose_name="Titulo")
    value = models.TextField(max_length=255, verbose_name="Valor")
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Opción'
        verbose_name_plural = 'Opciones'

    def __str__(self):
        return self.key

class OptionAdmin(admin.ModelAdmin):
    list_display = ('opcion', 'valor', 'created', 'updated')

    @admin.display(empty_value='???')
    def opcion(self, obj):
        return obj.key

    @admin.display(empty_value='???')
    def valor(self, obj):
        return obj.value

    @admin.display(empty_value='???')
    def created(self, obj):
        return obj.created_at.strftime("%d/%m/%Y %X")

    @admin.display(empty_value='???')
    def updated(self, obj):
        return obj.updated_at.strftime("%d/%m/%Y %X")