from rest_framework import serializers
from app.models import Benefit

class BenefitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Benefit
        fields = ['content']