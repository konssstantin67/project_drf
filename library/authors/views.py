from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import LimitOffsetPagination
from .models import Author, Book
from .serializers import AuthorModelSerializer, BookSerializer
from .filters import AuthorFilter, BookFilter


class AuthorLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class BookLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class AuthorModelViewSet(ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorModelSerializer
    pagination_class = AuthorLimitOffsetPagination
    filterset_class = AuthorFilter


class BookViewSet(ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()
    pagination_class = BookLimitOffsetPagination
    filterset_class = BookFilter
