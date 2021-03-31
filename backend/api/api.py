from .models import ApartmentsPics
from rest_framework import viewsets, permissions
from .serializers import PicSerializer

class Gallery(viewsets.ModelViewSet):
    queryset = ApartmentsPics.objects.all().exclude(gallery=False)
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PicSerializer
    http_method_names = ['get']


class Aps(viewsets.ModelViewSet):
    queryset = ApartmentsPics.objects.all().exclude(ap_number=0)
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PicSerializer
    http_method_names = ['get']

