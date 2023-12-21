# Generated by Django 4.2.6 on 2023-12-01 21:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0004_project_technologies'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='desktop_image',
            field=models.ImageField(blank=True, null=True, upload_to='images/project-images/'),
        ),
        migrations.AlterField(
            model_name='project',
            name='mobile_image',
            field=models.ImageField(blank=True, null=True, upload_to='images/project-images/'),
        ),
    ]