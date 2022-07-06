from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from http.client import BAD_REQUEST, FOUND
from rest_framework import viewsets
from rest_framework.response import Response


# Create your views here.
@api_view(['GET'])
def home(request):

	data = {
	"Grupo": "No.6",
	"Integrantes": [
		{"Nombre" : "Mariano Castillo Martínez", "Matricula": "100102792"},
		{"Nombre" : "David José Cabrera Rosario", "Matricula": "100264119"},
		{"Nombre" : "Ever Cuevas Rodriguez", "Matricula": "100066025"}
	]}

	return Response(data)
