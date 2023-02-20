from django.db import models
from uuid import uuid4
from authors.models import Author

DEFAULT = models.UUIDField(default=None)


class Book(models.Model):
    id = models.UUIDField(default=uuid4, primary_key=True)
    name = models.CharField(max_length=64, unique=True)
    authors = models.ForeignKey(
        Author, default=DEFAULT, on_delete=models.CASCADE)

    def __str__(self):
        return '{self.id} {self.name} {self.authors}'.format(self=self)
