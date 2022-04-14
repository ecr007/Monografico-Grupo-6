from rest_framework import serializers
from app.models import Order


class OrdenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'
        