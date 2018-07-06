from django.contrib import admin

from apps.core.models import Category, Transaction, User

admin.site.register(User)
admin.site.register(Category)
admin.site.register(Transaction)
