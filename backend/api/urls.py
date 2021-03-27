from django.db import router
from rest_framework import routers, urlpatterns
from .api import Aps, Gallery

router = routers.DefaultRouter()
router.register('gallery', Gallery, 'Gallery')
router.register('aps', Aps, 'aps')

urlpatterns = router.urls