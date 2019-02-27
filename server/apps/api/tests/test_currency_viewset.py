from rest_framework.reverse import reverse

from apps.api.tests.helpers import BaseViewSet
from apps.core.models import Currency


class CurrencyViewSetTest(BaseViewSet):

    def setUp(self):
        super(CurrencyViewSetTest, self).setUp()
        self.url = reverse('currency-list')
        self.default_currencies = list(Currency.objects.values_list('code', flat=True))  # data from migration

    def test_authenticated_user_can_get_all_currencies(self):
        self.login(self.user)
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, 200)

        self.assertEqual([c.get('code') for c in response.data], self.default_currencies)

    def test_no_access_for_unauthenticated_user(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, 401)

    def test_superuser_can_add_new_currencies(self):
        self.login(self.superuser)
        response = self.client.post(self.url, {'code': 'CZK'})
        self.assertEqual(response.status_code, 201)
        self.assertEqual(Currency.objects.count(), len(self.default_currencies)+1)

    def test_regular_user_cannot_add_new_currencies(self):
        self.login(self.user)
        response = self.client.post(self.url, {'code': 'CZK'})
        self.assertEqual(response.status_code, 403)
