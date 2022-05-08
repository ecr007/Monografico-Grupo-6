from django.db import models
from django.contrib import admin

class Contact(models.Model):

    fullname = models.CharField(max_length=60, verbose_name="Nombre Completo")
    subject = models.CharField(max_length=60, verbose_name="Asunto")
    phone = models.CharField(max_length=15,null=True, verbose_name="Teléfono")
    email = models.CharField(max_length = 254, null=True, blank=True, verbose_name="E-Mail")
    message = models.TextField(max_length = 254, verbose_name="Mensaje")
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Contacto'
        verbose_name_plural = 'Contactos'

    def __str__(self):
        return self.fullname

class ContactAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'asunto', 'telefono', 'created', 'updated')

    @admin.display(empty_value='???')
    def nombre(self, obj):
        return obj.fullname

    @admin.display(empty_value='???')
    def asunto(self, obj):
        return obj.subject

    @admin.display(empty_value='???')
    def telefono(self, obj):
        return obj.phone

    @admin.display(empty_value='???')
    def created(self, obj):
        return obj.created_at.strftime("%d/%m/%Y %X")

    @admin.display(empty_value='???')
    def updated(self, obj):
        return obj.updated_at.strftime("%d/%m/%Y %X")