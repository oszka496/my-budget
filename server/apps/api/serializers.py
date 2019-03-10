from rest_framework import serializers

from apps.core.models import Category, Transaction, User, Currency


class CurrencySerializer(serializers.ModelSerializer):
    class Meta:
        model = Currency
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'currency')


class TransactionSerializer(serializers.ModelSerializer):
    currency = serializers.CharField(read_only=True)

    class Meta:
        model = Transaction
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
