import json
import uuid
from datetime import date
from decimal import Decimal

from django.contrib.auth.models import AbstractUser
from django.core.exceptions import ValidationError
from django.core.validators import MinValueValidator
from django.db import models
from django.db.models.signals import post_save
from django.utils.functional import cached_property
from rest_framework.authtoken.models import Token

from server.settings import APPS_CORE_DIR


class Currency(models.Model):
    class Meta:
        verbose_name_plural = "currencies"

    code = models.CharField(max_length=3, primary_key=True)


class User(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    currency = models.ForeignKey(Currency, on_delete=models.CASCADE, default='EUR')

    @staticmethod
    def create_categories_for_user(sender, instance, created, **kwargs):
        if not created:
            return

        Token.objects.create(user=instance)
        categories = Category.get_default_categories()
        for category in categories:
            Category.objects.create(user_id=instance.id, **category)


class Category(models.Model):
    class Meta:
        verbose_name_plural = "categories"
        unique_together = (('name', 'user'),)

    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=30)
    is_income = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    @staticmethod
    def get_default_categories():
        with open(APPS_CORE_DIR + '/initial_data/default_categories.json') as f:
            categories = json.loads(f.read())
        return categories


class PositiveDecimalField(models.DecimalField):
    MIN_VALUE = Decimal('0.01')

    def to_python(self, value):
        number = super().to_python(value)
        if number < Decimal(self.MIN_VALUE):
            raise ValidationError('Value should be a positive number')
        return number

    @cached_property
    def validators(self):
        return super().validators + [MinValueValidator(self.MIN_VALUE)]


class Transaction(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=30)
    category = models.ForeignKey(Category, null=True, on_delete=models.SET_NULL)
    date = models.DateField(default=date.today)
    amount = PositiveDecimalField(max_digits=7, decimal_places=2)
    is_income = models.BooleanField()

    def save(self, *args, **kwargs):
        if self.is_income is None:
            self.is_income = self.category.is_income if isinstance(self.category, Category) else False
        super().save(*args, **kwargs)

    @property
    def currency(self):
        return self.user.currency.code


post_save.connect(User.create_categories_for_user, sender=User)
