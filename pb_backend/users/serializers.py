from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Profile

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model=User
    fields=['username', 'first_name', 'last_name', 'email']

class ProfileSerializer(serializers.ModelSerializer):
  user=UserSerializer(many=False) 

  class Meta:
    model=Profile
    fields='__all__'