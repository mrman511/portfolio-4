from rest_framework import serializers
from .models import Paragraph, Stack
from languages.serializers import LanguageSerializer
from frameworks.serializers import FrameworkSerializer
from technologies.serializers import TechnologySerializer

class ParagraphSerializer(serializers.ModelSerializer):
  class Meta:
    model=Paragraph
    fields='__all__'

class StackSerializer(serializers.ModelSerializer):
  languages=LanguageSerializer(many=True)
  frameworks=FrameworkSerializer(many=True)
  technologies=TechnologySerializer(many=True)

  class Meta:
    model=Stack
    fields='__all__'
