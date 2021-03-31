from django.db import models

APPNUMBER_CHOICES= [
    (1, '1'),
    (2, '2'),
    (3, 'mainpage'),
    (0, 'other'),
    ]

class ApartmentsPics(models.Model):
    ap_number = models.SmallIntegerField(null=False, blank=False, choices=APPNUMBER_CHOICES)
    title = models.CharField(max_length=100)
    placement = models.CharField(max_length=100, null=True, blank=True, default=None)
    pic = models.ImageField(upload_to='photos', null=False, blank=False)
    gallery = models.BooleanField()
