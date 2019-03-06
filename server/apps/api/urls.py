from django.urls import path
from rest_framework import routers
from rest_framework.authtoken import views

from apps.api.views import CategoryViewSet, TransactionViewSet, UserViewSet, CurrencyViewSet, ProfileDetail

router = routers.DefaultRouter()
router.register(r'categories', CategoryViewSet, 'category')
router.register(r'currencies', CurrencyViewSet, 'currency')
router.register(r'transactions', TransactionViewSet, 'transaction')
router.register(r'users', UserViewSet, 'user')

urlpatterns = router.urls + [
    path('profile/', ProfileDetail.as_view()),
    path('token/', views.obtain_auth_token)
]
