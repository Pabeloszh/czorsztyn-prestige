from django.contrib import admin
from .models import ApartmentsPics
# Register your models here.



@admin.register(ApartmentsPics)
class ApartmentAdmin(admin.ModelAdmin):
    list_display = ["title", "ap_number", 'placement', 'gallery']
    list_filter = ("ap_number",)
    search_fields = ("ap_number", "title")