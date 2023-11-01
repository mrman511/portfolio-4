from rest_framework import serializers
from projects.models import Project, Language, Framework, Technology, Tag

class LanguageSerializer(serializers.ModelSerializer):
  class Meta:
    model=Language
    fields='__all__'

class FrameworkSerializer(serializers.ModelSerializer):
  class Meta:
    model=Framework
    fields='__all__'

class TechnologySerializer(serializers.ModelSerializer):
  class Meta:
    model=Technology
    fields='__all__'

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