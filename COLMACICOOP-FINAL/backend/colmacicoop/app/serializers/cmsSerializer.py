from rest_framework import serializers
from app.models import Cms

class CmsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cms
        fields = ['title','icon','content']