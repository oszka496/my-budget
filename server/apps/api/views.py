from rest_framework import viewsets

from apps.api.serializers import CategorySerializer, TransactionSerializer, UserSerializer
from apps.core.models import Category, Transaction, User


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class TransactionViewSet(viewsets.ModelViewSet):
    serializer_class = TransactionSerializer
    queryset = Transaction.objects.order_by('-date')


class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()
