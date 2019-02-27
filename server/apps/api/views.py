from rest_framework import permissions, viewsets
from rest_framework.decorators import permission_classes

from apps.api.permissions import IsAdminUserOrReadOnly
from apps.api.serializers import CategorySerializer, TransactionSerializer, UserSerializer, CurrencySerializer
from apps.core.models import Category, Transaction, User, Currency


@permission_classes((permissions.IsAuthenticated, IsAdminUserOrReadOnly))
class CurrencyViewSet(viewsets.ModelViewSet):
    serializer_class = CurrencySerializer
    queryset = Currency.objects.all()


@permission_classes((permissions.IsAuthenticated, permissions.IsAdminUser))
class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


@permission_classes((permissions.IsAuthenticated,))
class TransactionViewSet(viewsets.ModelViewSet):
    serializer_class = TransactionSerializer

    def get_queryset(self):
        return Transaction.objects.filter(user=self.request.user)

    def create(self, request, *args, **kwargs):
        request.data['user'] = request.user.id
        return super().create(request, *args, **kwargs)


@permission_classes((permissions.IsAuthenticated,))
class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class = CategorySerializer

    def get_queryset(self):
        return Category.objects.filter(user=self.request.user)
