from rest_framework.serializers import ModelSerializer
from .models import User


class UserModelSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class UserNewVersionModelSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = 'id', 'firstname', 'lastname', 'email', 'is_superuser', 'is_staff',
