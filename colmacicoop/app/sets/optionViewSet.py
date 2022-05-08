from rest_framework import viewsets, status
from rest_framework.response import Response
from app.models import Option
from app.serializers import OptionSerializer

class OptionViewSet(viewsets.ViewSet):

    def list(self, request):

        records = Option.objects.all();
        
        serializer = OptionSerializer(records, many=True)
        
        return Response(serializer.data)