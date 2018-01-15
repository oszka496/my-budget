from rest_framework import routers

from apps.api.views import TagViewSet, UserViewSet

router = routers.DefaultRouter()
router.register(r'tags', TagViewSet)
router.register(r'users', UserViewSet)
urlpatterns = router.urls
