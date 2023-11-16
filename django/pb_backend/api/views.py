import base64
from rest_framework.decorators import api_view
from rest_framework.response import Response
from projects.serializers import ProjectSerializer
from about_me.serializers import ParagraphSerializer, StackSerializer

from projects.models import Project
from about_me.models import Paragraph, Stack

# Create your views here.
@api_view(['GET'])
def end_points(request):
  endpoints = {
    'end_points': {
      'GET': 'api/'
    },
    'projects': {
      'GET': 'api/projects/'
    },
  }
  return Response(endpoints)

@api_view(['GET'])
def projects(request):
  projects = Project.objects.all()
  serializer = ProjectSerializer(projects, many=True)
  for project in serializer.data:
    if (project['mobile_image']):
      str=project['mobile_image']
      with open(f'static/images{ str }', 'rb') as image_file:
        mobile_image=base64.b64encode(image_file.read()).decode('utf-8')
      project['image']= mobile_image
    # if (project['desktop_image']):
    #   str=project['desktop_image']
    #   with open(f'static/images{ str }', 'rb') as image_file:
    #     mobile_image=base64.b64encode(image_file.read()).decode('utf-8')
    #   project['desktop_image']= mobile_image

  return Response(serializer.data)

@api_view(['GET'])
def about(request):
  stacks = Stack.objects.all()
  stack_serializer = StackSerializer(stacks, many=True)
  paragraphs = Paragraph.objects.all().order_by('order')
  paragrph_serializer = ParagraphSerializer(paragraphs, many=True)

  return Response({'stacks': stack_serializer.data, 'paragraphs': paragrph_serializer.data})
