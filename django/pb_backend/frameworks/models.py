from django.db import models
from languages.models import Language

# Create your models here.
class Framework(models.Model):
  name=models.CharField(max_length=100, blank=True, null=True, unique=True)
  language=models.ForeignKey(Language, blank=True, null=True, on_delete=models.CASCADE)

  def __str__(self):
    return self.name
