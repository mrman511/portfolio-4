from django.urls import path
from . import views

urlpatterns = [
  path('', views.end_points),
  path('about/', views.about),
  path('contact/', views.contact),
  path('projects/', views.projects),
  path('profile/', views.profile),
  # path(),
  # path(),
  # path(),
  # path(),
]