import json
from datetime import date
from decimal import Decimal

from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator
from django.db import models
from django.db.models.signals import post_save

from server.settings import APPS_CORE_DIR


class User(AbstractUser):
    @staticmethod
    def create_categories_for_user(sender, instance, created, **kwargs):
        if created:
            categories = Category.get_default_categories()
            for category in categories:
                Category.objects.create(user_id=instance.id, **category)


class Category(models.Model):
    class Meta:
        unique_together = (('name', 'user'),)

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=30)
    is_income = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    @staticmethod
    def get_default_categories():
        with open(APPS_CORE_DIR + '/initial_data/initial_categories.json') as f:
            categories = json.loads(f.read())
        return categories or []


class Transaction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=30)
    category = models.ForeignKey(Category, null=True, on_delete=models.SET_NULL)
    date = models.DateField(default=date.today)
    amount = models.DecimalField(max_digits=7, decimal_places=2, validators=[MinValueValidator(Decimal('0.01'))])
    is_income = models.BooleanField()

    def save(self, *args, **kwargs):
        if self.is_income is None:
            self.is_income = self.category.is_income
        super().save(*args, **kwargs)


post_save.connect(User.create_categories_for_user, sender=User)
