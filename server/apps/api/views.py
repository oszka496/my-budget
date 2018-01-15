from rest_framework import viewsets

from apps.api.serializers import TagSerializer
from apps.core.models import Tag


class TagViewSet(viewsets.ModelViewSet):
    serializer_class = TagSerializer
    queryset = Tag.objects.all()
