from django.core.mail import send_mail
from rest_framework.decorators import api_view
from rest_framework.response import Response

from projects.serializers import ProjectSerializer
from about_me.serializers import ParagraphSerializer, StackSerializer

from users.models import Profile
from django.contrib.auth.models import User
from users.serializers import ProfileSerializer

from projects.models import Project
from about_me.models import Paragraph, Stack

from pprint import pprint

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
    'profile': {
      'GET': 'api/profile'
    },
    'contact': {
      'POST': {
        'path': 'api/contact',
        'body': {
          'name': 'string',
          'email': 'string',
          'subject': 'string',
          'message': 'string',
        },
      } 
    }
  }
  return Response(endpoints)

@api_view(['GET'])
def projects(request):
  projects = Project.objects.all().order_by('created')
  serializer = ProjectSerializer(projects, many=True)

  return Response(serializer.data)

@api_view(['GET'])
def about(request):
  stacks = Stack.objects.all()
  stack_serializer = StackSerializer(stacks, many=True)
  paragraphs = Paragraph.objects.all().order_by('order')
  paragrph_serializer = ParagraphSerializer(paragraphs, many=True)

  return Response({'stacks': stack_serializer.data, 'paragraphs': paragrph_serializer.data})

@api_view(['GET'])
def profile(request):
  profile = Profile.objects.get(id=1)
  serializer = ProfileSerializer(profile, many=False).data
  return Response(serializer)

@api_view(['POST'])
def contact(request):
  adminEmail = User.objects.get(id=1).email
  msgData = request.data
  text = msgData['message'] + '\n\nFrom:\n' + msgData['name'] + '\n' + msgData['email']
  print(msgData['email'])
  send_mail(msgData['subject'], text, msgData['email'], [adminEmail], fail_silently=False)

  return Response({'status': 200})