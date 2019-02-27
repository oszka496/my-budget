from unittest import mock

from rest_framework.test import APITestCase

from apps.core.models import User, Category


def create_user(username, email, password):
    return User.objects.create_user(username=username, email=email, password=password)


def create_superuser(username, email, password):
    return User.objects.create_superuser(username=username, email=email, password=password)


def get_default_categories():
    return []


class BaseViewSet(APITestCase):
    password = 'pass'

    @mock.patch.object(Category, 'get_default_categories', get_default_categories)
    def setUp(self):
        self.user = create_user('user', 'user@example.com', self.password)
        self.superuser = create_superuser('admin', 'admin@example.com', self.password)

    def login(self, user):
        self.client.login(username=user.username, password=self.password)
