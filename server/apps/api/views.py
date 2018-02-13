from django.contrib.auth.models import User
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from rest_auth.registration.views import SocialLoginView
from rest_framework import viewsets

from apps.api.serializers import TagSerializer, UserSerializer
from apps.core.models import Tag


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class TagViewSet(viewsets.ModelViewSet):
    serializer_class = TagSerializer
    queryset = Tag.objects.all()


class GoogleLoginView(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
