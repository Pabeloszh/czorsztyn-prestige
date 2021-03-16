from django.db import models

# Create your models here.



APPNUMBER_CHOICES= [
    (1, '1'),
    (2, '2'),
    ]




class ApartmentsPics(models.Model):
    ap_number = models.SmallIntegerField(null=False, blank=False, choices=APPNUMBER_CHOICES)
    title = models.CharField(max_length=10)
    pic = models.ImageField(upload_to='photos', null=False, blank=False)



#SITE_HEADING_PIC - Pierwsze glowne zdjecie
#AP