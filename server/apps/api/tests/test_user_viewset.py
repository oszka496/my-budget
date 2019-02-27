from rest_framework.reverse import reverse

from apps.api.tests.helpers import BaseViewSet, create_user


class UserViewSetTest(BaseViewSet):

    def setUp(self):
        super(UserViewSetTest, self).setUp()
        self.user2 = create_user('u1', 'u1@example.com', 'pass1')
        self.user3 = create_user('u2', 'u2@example.com', 'pass2')

        self.url = reverse('user-list')

    def test_superuser_can_get_all_users(self):
        self.login(self.superuser)

        response = self.client.get(self.url)
        self.assertEqual(response.status_code, 200)

        expected = [
            {'id': self.user.id, 'username': self.user.username, 'email': self.user.email},
            {'id': self.superuser.id, 'username': self.superuser.username, 'email': self.superuser.email},
            {'id': self.user2.id, 'username': self.user2.username, 'email': self.user2.email},
            {'id': self.user3.id, 'username': self.user3.username, 'email': self.user3.email},
        ]

        self.assertEqual(response.data, expected)

    def test_no_access_for_regular_user(self):
        self.login(self.user)

        response = self.client.get(self.url)
        self.assertEqual(response.status_code, 403)
