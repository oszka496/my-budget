from django.contrib import admin

from apps.core.models import Category, Transaction, User, Currency

admin.site.register(User)
admin.site.register(Currency)
admin.site.register(Category)
admin.site.register(Transaction)
