from django.db import models
from frameworks.models import Framework
from languages.models import Language
from technologies.models import Technology

# Create your models here.
class Paragraph(models.Model):
  text=models.TextField(max_length=1000, blank=True, null=True)
  order=models.IntegerField(unique=True, blank=True, null=True)

class Stack(models.Model):
  title=models.CharField(max_length=100, null=True, blank=True)
  description=models.TextField(max_length=1000, blank=True, null=True)
  image=models.ImageField(upload_to='images/stack-images/', null=True, blank=True)

  languages=models.ManyToManyField(Language)
  frameworks=models.ManyToManyField(Framework)
  technologies=models.ManyToManyField(Technology)

  def __str__(self):
    return self.title