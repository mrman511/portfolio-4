from rest_framework import serializers
from frameworks.models import Framework

class FrameworkSerializer(serializers.ModelSerializer):
  class Meta:
    model=Framework
    fields='__all__'