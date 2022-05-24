from django.db import models
from django.contrib import admin

class Slide(models.Model):

    image = models.ImageField(upload_to='upload', verbose_name="Imagen")
    title = models.CharField(max_length=160, verbose_name="Titulo")
    subtitle = models.TextField(max_length=255,null=True,blank=True, verbose_name="Subtitulo")
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Slider'
        verbose_name_plural = 'Slider'

    def __str__(self):
        return self.title

class SlideAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'imagen', 'created', 'updated')

    @admin.display(empty_value='???')
    def titulo(self, obj):
        return obj.title

    @admin.display(empty_value='???')
    def imagen(self, obj):
        return obj.image

    @admin.display(empty_value='???')
    def created(self, obj):
        return obj.created_at.strftime("%d/%m/%Y %X")

    @admin.display(empty_value='???')
    def updated(self, obj):
        return obj.updated_at.strftime("%d/%m/%Y %X")