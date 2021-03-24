from django.db.models import fields
from rest_framework import serializers
from .models import ApartmentsPics

class PicSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApartmentsPics
        fields = ['ap_number', 'placement', 'pic']