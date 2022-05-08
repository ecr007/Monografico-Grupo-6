from django.db import models
from django.contrib import admin
from tinymce.models import HTMLField

class Cms(models.Model):

    title = models.CharField(max_length=60, verbose_name="Titulo")
    icon = models.CharField(max_length=60)
    content = HTMLField(verbose_name="Contenido")
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Contenido'
        verbose_name_plural = 'Contenidos'

    def __str__(self):
        return self.title

class CmsAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'created', 'updated')

    @admin.display(empty_value='???')
    def titulo(self, obj):
        return obj.title

    @admin.display(empty_value='???')
    def created(self, obj):
        return obj.created_at.strftime("%d/%m/%Y %X")

    @admin.display(empty_value='???')
    def updated(self, obj):
        return obj.updated_at.strftime("%d/%m/%Y %X")