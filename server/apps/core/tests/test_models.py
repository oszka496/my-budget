from unittest import mock

from django.core.exceptions import ValidationError
from django.db import IntegrityError
from django.test import TestCase

from apps.core.models import Category, Transaction, User


def get_default_categories():
    return [
        {'name': 'Incomes', 'is_income': True},
        {'name': 'Expenses', 'is_income': False},
    ]


class UserTest(TestCase):
    @mock.patch.object(Category, 'get_default_categories', get_default_categories)
    def test_create_default_categories(self):
        self.assertEqual(Category.objects.count(), 0)
        User.objects.create_user(username='jd', email='j.doe@example.com', password='some password')
        self.assertEqual(Category.objects.count(), 2)

    @mock.patch.object(Category, 'get_default_categories', get_default_categories)
    def test_update_user_with_custom_categories(self):
        user = User.objects.create_user(username='jd', email='j.doe@example.com', password='some password')
        default_categories = list(user.category_set.values())

        category_to_change = user.category_set.first()
        category_to_change.name = 'Work'
        category_to_change.save()

        user_categories = list(user.category_set.values())
        self.assertNotEqual(default_categories, user_categories)

        user.username = 'jdoe'
        user.save()

        new_user_categories = list(user.category_set.values())
        self.assertEqual(new_user_categories, user_categories)
        self.assertNotEqual(new_user_categories, default_categories)


class CategoryTest(TestCase):
    @mock.patch.object(Category, 'get_default_categories', get_default_categories)
    def setUp(self):
        self.user = User.objects.create_user(username='jd', email='j.doe@example.com', password='some password')

    def create_category(self, name, user, is_income=None):
        if is_income is None:
            return Category.objects.create(name=name, user=user)
        return Category.objects.create(name=name, user=user, is_income=is_income)

    def test_create_category(self):
        category = self.create_category('Test', self.user, True)

        self.assertTrue(isinstance(category, Category))
        self.assertTrue(category.is_income)
        self.assertEqual(str(category), category.name)
        self.assertEqual(Category.objects.count(), 3)

    def test_create_category__no_income_type(self):
        category = self.create_category('Test', self.user)

        self.assertTrue(isinstance(category, Category))
        self.assertFalse(category.is_income)
        self.assertEqual(str(category), category.name)

    def test_create_category__no_user(self):
        with self.assertRaises(IntegrityError):
            self.create_category('Test', None)

    def test_category__unique_name_and_user(self):
        self.create_category('Test', self.user)
        with self.assertRaises(IntegrityError):
            self.create_category('Test', self.user)


class TransactionTest(TestCase):
    @mock.patch.object(Category, 'get_default_categories', get_default_categories)
    def setUp(self):
        self.user = User.objects.create_user(username='jd', email='j.doe@example.com', password='some password')

    def create_transaction(self, title='Some spending', amount=10, category=None, is_income=None):
        transaction = Transaction(user=self.user, title=title, amount=amount)
        if category is not None:
            transaction.category = category

        if is_income is not None:
            transaction.is_income = is_income

        transaction.save()
        return transaction

    def test_create_transaction__explicit_type(self):
        category = self.user.category_set.first()
        self.assertTrue(category.is_income)

        transaction = self.create_transaction(category=category, is_income=False)
        self.assertFalse(transaction.is_income)

    def test_create_transaction__inherit_type(self):
        category = self.user.category_set.first()
        self.assertTrue(category.is_income)

        transaction = self.create_transaction(category=category)
        self.assertTrue(transaction.is_income)

    def test_create_transaction__inherit_type_no_category(self):
        transaction = self.create_transaction()
        self.assertFalse(transaction.is_income)

    def test_duplicate_transaction(self):
        self.assertEqual(Transaction.objects.count(), 0)
        transaction1 = self.create_transaction()
        transaction2 = self.create_transaction()

        self.assertEqual([transaction1, transaction2], list(Transaction.objects.all()))

    def test_transaction__delete_category(self):
        category = self.user.category_set.first()
        transaction = self.create_transaction(category=category)
        self.assertEqual(transaction.category, category)

        category.delete()
        transaction.refresh_from_db()
        self.assertIsNone(transaction.category)

    def test_create_transaction__negative_amount(self):
        with self.assertRaises(ValidationError):
            self.create_transaction(amount=-10)
