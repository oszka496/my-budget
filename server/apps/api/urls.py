from django.urls import path, include
from django.views.generic import TemplateView
from rest_framework import routers

from apps.api.views import GoogleLoginView, TagViewSet, UserViewSet

router = routers.DefaultRouter()
router.register(r'tags', TagViewSet)
router.register(r'users', UserViewSet)

urlpatterns = router.urls + [
    path('auth/', include('rest_auth.urls')),
    path('auth/google/', GoogleLoginView.as_view()),
    path('auth/google/callback/', TemplateView.as_view(template_name='callback.html')),
    path('auth/registration/', include('rest_auth.registration.urls')),
]
