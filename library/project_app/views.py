from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import get_object_or_404
from rest_framework.pagination import LimitOffsetPagination
from .models import TODO, Project
from .serializers import TODOModelSerializer, ProjectModelSerializer
from .filters import ProjectFilter, TODOFilter


class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class TODOLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class TODOModelViewSet(ModelViewSet):

    queryset = TODO.objects.all()
    serializer_class = TODOModelSerializer
    pagination_class = TODOLimitOffsetPagination
    filterset_class = TODOFilter

    def destroy(self, request, pk=None):

        instance = get_object_or_404(TODO, pk=pk)
        instance.is_active = False
        instance.save()
        todo = TODO.objects.all()
        serializer_class = TODOModelSerializer(todo, many=True)
        return Response(serializer_class.data)


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectLimitOffsetPagination
    filterset_class = ProjectFilter
