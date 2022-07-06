from dataclasses import field
from rest_framework import serializers
from app.models import Address


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ('client', 'street ', 'number', 'zip_code', 'state', '')
        

