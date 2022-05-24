from rest_framework import viewsets, status
from rest_framework.response import Response
from app.models import Faq
from app.serializers import FaqSerializer

class FaqViewSet(viewsets.ViewSet):

    def list(self, request):

        records = Faq.objects.all();
        
        serializer = FaqSerializer(records, many=True)
        
        return Response(serializer.data)