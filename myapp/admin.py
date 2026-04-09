from django.contrib import admin
from .models import TodoItem
from django.db import models
from .models import Post
# Register your models here.
admin.site.register(TodoItem)
admin.site.register(Post)