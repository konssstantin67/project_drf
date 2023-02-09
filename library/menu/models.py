from django.db import models
from authors.models import Author
from users.models import User
from books.models import Book
from project_app.models import Project, TODO
from uuid import uuid4

DEFAULT = models.UUIDField(default=uuid4)


class Menu(models.Model):
    author = models.ManyToManyField(Author, default=DEFAULT)
    user = models.ManyToManyField(User, default=DEFAULT)
    book = models.ManyToManyField(Book, default=DEFAULT)
    project = models.ManyToManyField(Project, default=DEFAULT)
    todo = models.ManyToManyField(TODO, default=DEFAULT)

    def __str__(self):
        return '{self.author} {self.user} {self.book} {self.project} {self.todo}'.format(self=self)
