from unittest import mock

from rest_framework.reverse import reverse
from rest_framework.test import APITestCase

from apps.core.models import User, Category, Transaction


def create_user(username, email, password):
    return User.objects.create_user(username=username, email=email, password=password)


def get_default_categories():
    return []


class BaseViewSet(APITestCase):

    @mock.patch.object(Category, 'get_default_categories', get_default_categories)
    def setUp(self):
        self.user = create_user('user', 'user@example.com', 'pass')


class CategoryViewSetTest(BaseViewSet):

    def setUp(self):
        super(CategoryViewSetTest, self).setUp()
        self.url = reverse('category-list')

    def test_get_all_categories(self):
        c1 = Category.objects.create(user=self.user, name='Food')
        c2 = Category.objects.create(user=self.user, name='Childcare')
        c3 = Category.objects.create(user=self.user, name='Vacation')

        response = self.client.get(self.url)
        self.assertEqual(response.status_code, 200)

        self.assertEqual([c.get('id') for c in response.data], [c1.id, c2.id, c3.id])


class TransactionViewSetTest(BaseViewSet):

    def setUp(self):
        super(TransactionViewSetTest, self).setUp()
        self.url = reverse('transaction-list')

    def test_get_all_transactions(self):
        t1 = Transaction.objects.create(user=self.user, title='Trans1', amount=3)
        t2 = Transaction.objects.create(user=self.user, title='Trans2', amount=5)
        t3 = Transaction.objects.create(user=self.user, title='Trans3', amount=10)

        response = self.client.get(self.url)
        self.assertEqual(response.status_code, 200)

        self.assertEqual([t.get('id') for t in response.data], [t1.id, t2.id, t3.id])


class UserViewSetTest(BaseViewSet):

    def setUp(self):
        super(UserViewSetTest, self).setUp()
        self.user2 = create_user('u1', 'u1@example.com', 'pass1')
        self.user3 = create_user('u2', 'u2@example.com', 'pass2')

        self.url = reverse('user-list')

    def test_get_all_users(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, 200)

        expected = [
            {'id': self.user.id, 'username': self.user.username, 'email': self.user.email},
            {'id': self.user2.id, 'username': self.user2.username, 'email': self.user2.email},
            {'id': self.user3.id, 'username': self.user3.username, 'email': self.user3.email},
        ]

        self.assertEqual(response.data, expected)

