from django.db import models

# Create your models here.

class Language(models.Model):
  name=models.CharField(max_length=100, blank=True, null=True, unique=True)

  def __str__(self):
    return self.name

class Framework(models.Model):
  name=models.CharField(max_length=100, blank=True, null=True, unique=True)

  def __str__(self):
    return self.name

class Technology(models.Model):
  name=models.CharField(max_length=100, blank=True, null=True, unique=True)

  def __str__(self):
    return self.name

class Tag(models.Model):
  name=models.CharField(max_length=100, blank=True, null=True, unique=True)

  def __str__(self):
    return self.name

class Project(models.Model):
  title=models.CharField(max_length=100, blank=True, null=True)
  description=models.TextField(max_length=1000, blank=True, null=True)

  languages=models.ManyToManyField(Language, null=True, blank=True)
  frameworks=models.ManyToManyField(Framework, null=True, blank=True)
  technologies=models.ManyToManyField(Technology, null=True, blank=True)
  tags=models.ManyToManyField(Tag, null=True, blank=True)

  def __str__(self):
    return self.title