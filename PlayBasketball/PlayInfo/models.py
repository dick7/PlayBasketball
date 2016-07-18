# coding:utf-8

from __future__ import unicode_literals

from django.db import models
from django.contrib import admin

# Create your models here.
class PlayInfoPost(models.Model):
    title = models.CharField(max_length=150)
    body = models.TextField()
    timestamp = models.DateTimeField()

class PlayInfoPostAdmin(admin.ModelAdmin):
    list_display = ('title','timestamp')

admin.site.register(PlayInfoPost,PlayInfoPostAdmin)