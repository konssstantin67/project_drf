from .models import Author
from .views import AuthorModelViewSet
from django.contrib.auth.models import User
import json
from mixer.backend.django import mixer
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
from books.models import Book


class TestAuthorViewSet(TestCase):

    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/authors/')
        view = AuthorModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


def test_create_admin(self):

    factory = APIRequestFactory()
    request = factory.post('/api/authors/', {'name': 'Пушкин',
                                             'birthday_year': 1799}, format='json')
    admin = User.objects.create_superuser('admin', 'admin@admin.com',
                                          'admin123456')
    force_authenticate(request, admin)
    view = AuthorModelViewSet.as_view({'post': 'create'})
    response = view(request)
    self.assertEqual(response.status_code, status.HTTP_201_CREATED)
