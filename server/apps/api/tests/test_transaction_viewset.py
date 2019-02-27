from rest_framework.reverse import reverse

from apps.api.tests.helpers import BaseViewSet
from apps.core.models import Transaction


class TransactionViewSetTest(BaseViewSet):

    def setUp(self):
        super(TransactionViewSetTest, self).setUp()
        self.url = reverse('transaction-list')

    def test_authenticated_user_can_get_their_transactions(self):
        t1 = Transaction.objects.create(user=self.user, title='Trans1', amount=3)
        t2 = Transaction.objects.create(user=self.user, title='Trans2', amount=5)
        t3 = Transaction.objects.create(user=self.user, title='Trans3', amount=10)

        self.login(self.user)
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, 200)

        self.assertEqual([t.get('id') for t in response.data], [t1.id, t2.id, t3.id])

    def test_authenticated_user_not_getting_other_user_transactions(self):
        Transaction.objects.create(user=self.superuser, title='Transaction', amount=10)

        self.login(self.user)
        response = self.client.get(self.url)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data, [])

    def test_no_access_for_unauthenticated_user(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, 401)
