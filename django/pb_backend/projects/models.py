from venv import create
from django.db import models
from languages.models import Language
from frameworks.models import Framework
from technologies.models import Technology

class Tag(models.Model):
  name=models.CharField(max_length=100, blank=True, null=True, unique=True)

  def __str__(self):
    return self.name

class Project(models.Model):
  title=models.CharField(max_length=100, blank=True, null=True)
  description=models.TextField(max_length=1000, blank=True, null=True)
  is_responsive=models.BooleanField(default=True)
  mobile_image=models.ImageField(upload_to='images/project-images/', null=True, blank=True)
  desktop_image=models.ImageField(upload_to='images/project-images/', null=True, blank=True)
  created=models.DateField(null=True, blank=True)
  live_link=models.CharField(max_length=100, null=True, blank=True)
  github_link=models.CharField(max_length=100, null=True, blank=True)

  languages=models.ManyToManyField(Language, blank=True)
  frameworks=models.ManyToManyField(Framework, blank=True)
  technologies=models.ManyToManyField(Technology, blank=True)
  tags=models.ManyToManyField(Tag, blank=True)

  def __str__(self):
    return self.title