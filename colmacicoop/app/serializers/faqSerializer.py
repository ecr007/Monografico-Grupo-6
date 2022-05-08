from rest_framework import serializers
from app.models import Faq

class FaqSerializer(serializers.ModelSerializer):
    class Meta:
        model = Faq
        fields = ['title','content']