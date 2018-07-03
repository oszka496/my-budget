from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from django.contrib.auth.models import User
from rest_auth.registration.views import SocialLoginView
from rest_framework import viewsets

from apps.api.serializers import DefaultCategorySerializer, TransactionSerializer, UserSerializer
from apps.core.models import DefaultCategory, Transaction


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class TransactionViewSet(viewsets.ModelViewSet):
    serializer_class = TransactionSerializer
    queryset = Transaction.objects.all()


class DefaultCategoryViewSet(viewsets.ModelViewSet):
    serializer_class = DefaultCategorySerializer
    queryset = DefaultCategory.objects.all()


class GoogleLoginView(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
