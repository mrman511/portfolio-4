import base64
from django.shortcuts import render
from django.http import HttpResponse
from .models import Project

# Create your views here.

def get_project_image(request, pk):
  project = Project.objects.get(id=pk)
  image_data = project.mobile_image
  return HttpResponse(image_data, content_type='image/png')


def get_project_images(request, image_name):
  with open(f'static/images/{image_name}', 'rb') as image_file:
    image_data=base64.b64encode(image_file.read()).decode('utf-8')

  return HttpResponse(image_data)
