from .models import ApartmentsPics
from rest_framework import viewsets, permissions
from .serializers import PicSerializer

class All(viewsets.ModelViewSet):
    queryset = ApartmentsPics.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PicSerializer
    http_method_names = ['get']

class ApOne(viewsets.ModelViewSet):
    queryset = ApartmentsPics.objects.filter(ap_number=1)
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PicSerializer
    http_method_names = ['get']

class ApTwo(viewsets.ModelViewSet):
    queryset = ApartmentsPics.objects.filter(ap_number=2)
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PicSerializer
    http_method_names = ['get']