from django.contrib.auth.models import User
from django.db import models


class DefaultCategory(models.Model):
    name = models.CharField(max_length=30, unique=True)
    is_income = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class Transaction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=30)
    amount = models.DecimalField(max_digits=7, decimal_places=2)
    category = models.ForeignKey(DefaultCategory, on_delete=models.CASCADE)
    is_income = models.BooleanField()

    def save(self, *args, **kwargs):
        if self.is_income is None:
            self.is_income = self.category.is_income
        super().save(*args, **kwargs)
