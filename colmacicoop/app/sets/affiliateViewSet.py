from rest_framework import viewsets, status
from rest_framework.response import Response
from app.models import Affiliate
from app.serializers import AffiliateSerializer

class AffiliateViewSet(viewsets.ViewSet):

    def create(self, request):
        serializer = AffiliateSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )