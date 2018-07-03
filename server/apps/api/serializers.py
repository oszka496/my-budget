from django.contrib.auth.models import User
from rest_framework import serializers

from apps.core.models import DefaultCategory, Transaction


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = '__all__'


class DefaultCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = DefaultCategory
        fields = '__all__'
