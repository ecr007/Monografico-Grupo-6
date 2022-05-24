from rest_framework import viewsets, status
from rest_framework.response import Response
from app.models import Client
from app.serializers import ClientSerializer

class ClientViewSet(viewsets.ViewSet):

    def list(self, request):

        records = Client.objects.all();
        
        serializer = ClientSerializer(records, many=True)
        
        return Response(serializer.data)


    def create(self, request):
        serializer = ClientSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

    def retrieve(self, request, pk):
        try:
            record = Client.objects.get(pk=pk)
        except record.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = ClientSerializer(record, many=False)

        return Response(serializer.data, status=status.HTTP_200_OK)


    def update(self, request, pk=None):
        try:
            record = Client.objects.get(pk=pk)
        except record.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = ClientSerializer(record, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_200_OK)

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

    # token: 123456
    def destroy(self, request, pk=None):

        if request.headers.get("token") != "123456":
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        try:
            record = Client.objects.get(pk=pk)
        except record.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        record.delete()
        return Response(status=status.HTTP_200_OK)