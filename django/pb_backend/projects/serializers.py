from rest_framework import serializers
from projects.models import Project, Tag
from languages.serializers import LanguageSerializer
from frameworks.serializers import FrameworkSerializer
from technologies.serializers import TechnologySerializer

class TagSerializer(serializers.ModelSerializer):
  class Meta:
    model=Tag
    fields='__all__'

class ProjectSerializer(serializers.ModelSerializer):
  languages=LanguageSerializer(many=True)
  frameworks=FrameworkSerializer(many=True)
  technologies=TechnologySerializer(many=True)
  tags=TagSerializer(many=True)

  class Meta:
    model=Project
    fields='__all__'