from django.contrib import admin
from .models import Project, Language, Framework, Technology, Tag

# Register your models here.
admin.site.register(Project)
admin.site.register(Language)
admin.site.register(Framework)
admin.site.register(Technology)
admin.site.register(Tag)