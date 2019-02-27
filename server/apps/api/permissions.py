from rest_framework.permissions import IsAdminUser, SAFE_METHODS


class IsAdminUserOrReadOnly(IsAdminUser):

    def has_permission(self, request, view):
        is_admin = super().has_permission(request, view)
        print(request.user, request.user.is_staff, is_admin)
        return request.method in SAFE_METHODS or is_admin
