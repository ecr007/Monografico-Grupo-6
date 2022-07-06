from django.db import models
from django.contrib import admin

class Affiliate(models.Model):

    fullname = models.CharField(max_length=60, verbose_name="Nombre Completo")
    cedula = models.CharField(max_length=11, unique=True, verbose_name="Cédula")
    phone = models.CharField(max_length=15,null=False, blank=True, verbose_name="Teléfono")
    mobile = models.CharField(max_length=15, verbose_name="Celular")
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Afiliado'
        verbose_name_plural = 'Afiliados'

    def __str__(self):
        return self.fullname

class AffiliateAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'cedula', 'telefono', 'created', 'updated')

    @admin.display(empty_value='???')
    def nombre(self, obj):
        return obj.fullname

    @admin.display(empty_value='???')
    def cedula(self, obj):
        return obj.cedula

    @admin.display(empty_value='???')
    def telefono(self, obj):
        return obj.phone

    @admin.display(empty_value='???')
    def created(self, obj):
        return obj.created_at.strftime("%d/%m/%Y %X")

    @admin.display(empty_value='???')
    def updated(self, obj):
        return obj.updated_at.strftime("%d/%m/%Y %X")