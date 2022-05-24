from rest_framework import viewsets, status
from rest_framework.response import Response
from app.models import Network
from app.serializers import NetworkSerializer

class NetworkViewSet(viewsets.ViewSet):

    def list(self, request):

        records = Network.objects.all();
        
        serializer = NetworkSerializer(records, many=True)
        
        return Response(serializer.data)