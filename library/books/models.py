from django.db import models
from uuid import uuid4
from authors.models import Author as Author_1


class Book(models.Model):
    id = models.UUIDField(default=uuid4, primary_key=True)
    name = models.CharField(max_length=64, unique=True)
    authors = models.ForeignKey(
        Author_1, default=None, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
