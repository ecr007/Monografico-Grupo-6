from rest_framework import viewsets, status
from rest_framework.response import Response
from app.models import Cms
from app.serializers import CmsSerializer

class CmsViewSet(viewsets.ViewSet):

    def list(self, request):

        records = Cms.objects.all();
        
        serializer = CmsSerializer(records, many=True)
        
        return Response(serializer.data)