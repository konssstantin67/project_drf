from django_filters import rest_framework as filters
from .models import User


class UserFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = User
        fields = ['first_name',
                  'last_name',
                  'birthday_date'
                  ]
