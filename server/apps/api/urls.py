from django.urls import path
from rest_framework import routers
from rest_framework.authtoken import views

from apps.api.views import CategoryViewSet, TransactionViewSet, UserViewSet

router = routers.DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'transactions', TransactionViewSet)
router.register(r'users', UserViewSet)

urlpatterns = router.urls + [
    path('token/', views.obtain_auth_token)
]
