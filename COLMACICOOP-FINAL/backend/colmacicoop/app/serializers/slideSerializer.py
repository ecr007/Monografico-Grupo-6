from rest_framework import serializers
from app.models import Slide

class SlideSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slide
        fields = ['image','title','subtitle']