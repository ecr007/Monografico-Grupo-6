from rest_framework import viewsets, status
from rest_framework.response import Response
from app.models import Benefit
from app.serializers import BenefitSerializer

class BenefitViewSet(viewsets.ViewSet):

    def list(self, request):

        records = Benefit.objects.all();
        
        serializer = BenefitSerializer(records, many=True)
        
        return Response(serializer.data)