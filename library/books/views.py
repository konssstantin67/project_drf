from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import LimitOffsetPagination
from .models import Book
from .serializers import BookSerializer
from .filters import BookFilter


class BookLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class BookViewSet(ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()
    pagination_class = BookLimitOffsetPagination
    filterset_class = BookFilter

    def __str__(self):
        return self.name
