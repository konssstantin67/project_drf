from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import LimitOffsetPagination
from .models import Menu
from .serializers import MenuSerializer
from .filters import MenuFilter


class MenuLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class MenuViewSet(ModelViewSet):
    serializer_class = MenuSerializer
    queryset = Menu.objects.all()
    pagination_class = MenuLimitOffsetPagination
    filterset_class = MenuFilter

    def __str__(self):
        return self
