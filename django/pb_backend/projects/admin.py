from django.contrib import admin
from .models import Project, Technology, Tag

# Register your models here.
admin.site.register(Project)
admin.site.register(Technology)
admin.site.register(Tag)