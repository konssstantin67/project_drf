from django.shortcuts import render
from rest_framework import mixins, viewsets
from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import LimitOffsetPagination
from .models import User
from .serializers import UserModelSerializer, UserModelSerializer, UserNewVersionModelSerializer
from .filters import UserFilter
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer


class UserLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class UsersCustomViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, viewsets.GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    pagination_class = UserLimitOffsetPagination
    filterset_class = UserFilter

    def get_serializer_class(self):
        if self.request.version == '0.2':
            return UserNewVersionModelSerializer
        return UserModelSerializer


class UserModelViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
    pagination_class = UserLimitOffsetPagination
    filterset_class = UserFilter
