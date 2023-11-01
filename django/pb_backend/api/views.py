from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ProjectSerializer
from projects.models import Project, Language, Framework, Technology, Tag

# Create your views here.
@api_view(['GET'])
def end_points(request):
  endpoints = {
    'end_points': {
      'GET': 'api/'
    }
  }
  return Response(endpoints)

@api_view(['GET'])
def projects(request):
  projects = Project.objects.all()
  serializer = ProjectSerializer(projects, many=True)
  return Response(serializer.data)
