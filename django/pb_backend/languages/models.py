from django.db import models

# Create your models here.
class Language(models.Model):
  name=models.CharField(max_length=100, blank=True, null=True, unique=True)
  image=models.ImageField(upload_to='images/icons/', null=True, blank=True)

  def __str__(self):
    return self.name