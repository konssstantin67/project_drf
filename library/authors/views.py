from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import LimitOffsetPagination
from .models import Author
from books.models import Book
from .serializers import AuthorModelSerializer, BookSerializer, BookToAuthorSerializer
from .filters import AuthorFilter


class AuthorLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class AuthorModelViewSet(ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorModelSerializer
    pagination_class = AuthorLimitOffsetPagination
    filterset_class = AuthorFilter

    def __str__(self):
        return self.name


class BookViewSet(ModelViewSet):
    # permission_classes = [permissions.IsAuthenticated]
    serializer_class = BookSerializer
    queryset = Book.objects.all()

    def get_serializer_class(self):
        if self.request.method in ['GET']:
            return BookSerializer
        return BookToAuthorSerializer
