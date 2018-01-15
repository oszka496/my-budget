from rest_framework import routers

from apps.api.views import TagViewSet

router = routers.DefaultRouter()
router.register(r'tags', TagViewSet)
urlpatterns = router.urls
