from rest_framework import viewsets, status
from rest_framework.response import Response
from app.models import Slide
from app.serializers import SlideSerializer

class SlideViewSet(viewsets.ViewSet):

    def list(self, request):

        records = Slide.objects.all();
        
        serializer = SlideSerializer(records, many=True)
        
        return Response(serializer.data)