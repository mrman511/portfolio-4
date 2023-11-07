from django.urls import path
from . import views

urlpatterns = [
  path('<str:pk>/image/', views.get_project_image, name='project_image'),
  path('images/<str:image_name>', views.get_project_images, name='projects_images')
]