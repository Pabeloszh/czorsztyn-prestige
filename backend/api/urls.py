from django.db import router
from rest_framework import routers, urlpatterns
from .api import All, ApOne, ApTwo

router = routers.DefaultRouter()
router.register('all', All, 'all')
router.register('apone', ApOne, 'apone')
router.register('aptwo', ApTwo, 'aptwo')

urlpatterns = router.urls