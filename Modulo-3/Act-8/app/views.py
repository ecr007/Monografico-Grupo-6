from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from http.client import BAD_REQUEST, FOUND
from rest_framework import viewsets
from rest_framework.response import Response
from app.models import Address
from app.serializers.AddressSerializer import AddressSerializer


# Create your views here.
@api_view(['GET'])
def home(request):

	return Response("API ~ Grupo No.6")


@api_view(['GET'])
def list(self, request):
        ordery_by = request.query_params.get("orderby")
        Direcion = Address.objects.all()
               
        if ordery_by is not None:
                Direcion = Address.objects.order_by(ordery_by) 
                
        mi_serializador = AddressSerializer(Direcion, many=True)
        return Response({"Mensaje": "Peticion completada correctamente!, Registro Encontrado", "Data": mi_serializador.data})
