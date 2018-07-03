from django.contrib.auth.models import User
from django.db import models


class Category(models.Model):
    class Meta:
        unique_together = (('name', 'user'),)

    name = models.CharField(max_length=30)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class Tag(models.Model):
    class Meta:
        unique_together = (('name', 'user'),)

    name = models.CharField(max_length=30)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
