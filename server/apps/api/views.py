from rest_framework import permissions, viewsets
from rest_framework.decorators import permission_classes

from apps.api.serializers import CategorySerializer, TransactionSerializer, UserSerializer
from apps.core.models import Category, Transaction, User


@permission_classes((permissions.IsAuthenticated, permissions.IsAdminUser))
class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


@permission_classes((permissions.IsAuthenticated,))
class TransactionViewSet(viewsets.ModelViewSet):
    serializer_class = TransactionSerializer

    def get_queryset(self):
        return Transaction.objects.filter(user=self.request.user)


@permission_classes((permissions.IsAuthenticated,))
class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class = CategorySerializer

    def get_queryset(self):
        return Category.objects.filter(user=self.request.user)
