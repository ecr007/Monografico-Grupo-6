from rest_framework import serializers
from app.models import Option

class OptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Option
        fields = ['key','value']