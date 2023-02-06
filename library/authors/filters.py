from django_filters import rest_framework as filters
from .models import Author


class AuthorFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Author
        fields = ['first_name',
                  'last_name',
                  'birthday_year'
                  ]
