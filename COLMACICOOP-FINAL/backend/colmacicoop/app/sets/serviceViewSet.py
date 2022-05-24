from rest_framework import viewsets, status
from rest_framework.response import Response
from app.models import Service
from app.serializers import ServiceSerializer

class ServiceViewSet(viewsets.ViewSet):

    def list(self, request):

        records = Service.objects.order_by('title').all();
        
        serializer = ServiceSerializer(records, many=True)
        
        return Response(serializer.data)