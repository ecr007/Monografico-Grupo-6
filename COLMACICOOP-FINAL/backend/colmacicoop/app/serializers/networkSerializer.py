from rest_framework import serializers
from app.models import Network

class NetworkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Network
        fields = ['url','icon']