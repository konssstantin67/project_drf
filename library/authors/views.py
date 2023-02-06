from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import LimitOffsetPagination
from .models import Author
from .serializers import AuthorModelSerializer
from .filters import AuthorFilter


class AuthorLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class AuthorModelViewSet(ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorModelSerializer
    pagination_class = AuthorLimitOffsetPagination
    filterset_class = AuthorFilter
