from django.forms import model_to_dict
from rest_framework.reverse import reverse

from apps.api.tests.helpers import BaseViewSet


class ProfileDetailTest(BaseViewSet):

    def setUp(self):
        super().setUp()
        self.url = reverse('profile')

    def test_authenticated_user_can_see_their_profile(self):
        self.login(self.user)
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, 200)

        expectedResult = model_to_dict(self.user, fields=['id', 'username', 'email', 'currency'])
        self.assertEqual(response.data, expectedResult)

    def test_authenticated_user_can_update_their_profile(self):
        self.login(self.user)
        response = self.client.patch(self.url, {'currency': 'USD'})
        self.assertEqual(response.status_code, 200)
