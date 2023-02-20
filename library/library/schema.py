import graphene
from graphene_django import DjangoObjectType
from books.models import Book
from authors.models import Author
from users.models import User
from project_app.models import TODO, Project
from graphene_django import DjangoObjectType


class AuthorType(DjangoObjectType):
    class Meta:
        model = Author
        fields = '__all__'


class BookType(DjangoObjectType):
    class Meta:
        model = Book
        fields = '__all__'


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'


class TODOType(DjangoObjectType):
    class Meta:
        model = TODO
        fields = '__all__'


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class Query(graphene.ObjectType):
    all_users = graphene.List(UserType)
    all_projects = graphene.List(ProjectType)
    all_todolist = graphene.List(TODOType)
    all_authors = graphene.List(AuthorType)
    all_books = graphene.List(BookType)

    def resolve_all_users(root, info):
        return User.objects.all()

    def resolve_all_projects(root, info):
        return Project.objects.all()

    def resolve_all_todo(root, info):
        return TODO.objects.all()

    def resolve_all_authors(root, info):
        return Author.objects.all()

    def resolve_all_books(root, info):
        return Book.objects.all()


schema = graphene.Schema(query=Query)
