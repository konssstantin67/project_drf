from django_filters import rest_framework as filters
from .models import Author, Book


class AuthorFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Author
        fields = ['first_name',
                  'last_name',
                  'birthday_year'
                  ]


class BookFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Book
        fields = ['name',
                  'author',
                  ]
