from django.contrib.auth.models import AbstractUser
from django.db import models
from users.models import User


# Проект
class Project (models.Model):
    name = models.CharField(max_length=128)
    link = models.URLField(verbose_name="Ссылка", default="https://")
    users = models.ManyToManyField(User)

    def __str__(self):
        return self.name

# Заметка


class TODO(models.Model):
    text = models.TextField(max_length=1500)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    create_date = models.DateField(auto_now_add=True)
    update_date = models.DateField()
    users = models.ForeignKey(User, models.PROTECT)
    is_active = models.BooleanField(default=True)
