from .models import ApartmentsPics
from rest_framework import viewsets, permissions
from .serializers import PicSerializer

class PicSerializerViewSet(viewsets.ModelViewSet):
    queryset = ApartmentsPics.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PicSerializer
    http_method_names = ['get']