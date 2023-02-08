from django_filters import rest_framework as filters
from .models import Menu


class MenuFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Menu
        fields = ['author',
                  'user',
                  'book',
                  'project',
                  'todo',
                  ]
