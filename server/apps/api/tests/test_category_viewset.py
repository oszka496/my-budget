from rest_framework.reverse import reverse

from apps.api.tests.helpers import BaseViewSet
from apps.core.models import Category


class CategoryViewSetTest(BaseViewSet):

    def setUp(self):
        super(CategoryViewSetTest, self).setUp()
        self.url = reverse('category-list')

    def test_authenticated_user_can_get_their_categories(self):
        c1 = Category.objects.create(user=self.user, name='Food')
        c2 = Category.objects.create(user=self.user, name='Childcare')
        c3 = Category.objects.create(user=self.user, name='Vacation')

        self.login(self.user)
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, 200)

        self.assertEqual([c.get('id') for c in response.data], [c1.id, c2.id, c3.id])

    def test_authenticated_user_not_getting_other_user_categories(self):
        Category.objects.create(user=self.superuser, name='Food')

        self.login(self.user)
        response = self.client.get(self.url)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data, [])

    def test_no_access_for_unauthenticated_user(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, 401)
