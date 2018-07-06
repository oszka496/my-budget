from django.urls import include, path
from django.views.generic import TemplateView
from rest_framework import routers

from apps.api.views import CategoryViewSet, GoogleLoginView, TransactionViewSet, UserViewSet

router = routers.DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'transactions', TransactionViewSet)
router.register(r'users', UserViewSet)

urlpatterns = router.urls + [
    path('auth/', include('rest_auth.urls')),
    path('auth/google/', GoogleLoginView.as_view()),
    path('auth/google/callback/', TemplateView.as_view(template_name='callback.html')),
    path('auth/registration/', include('rest_auth.registration.urls')),
]
