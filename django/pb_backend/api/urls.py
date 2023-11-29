from django.urls import path
from . import views

urlpatterns = [
  path('', views.end_points),
  path('projects/', views.projects),
  path('about/', views.about),
  path('profile/', views.profile),
  # path(),
  # path(),
  # path(),
  # path(),
]