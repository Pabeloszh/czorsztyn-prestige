from django.db import router
from rest_framework import routers, urlpatterns
from .api import PicSerializerViewSet

router = routers.DefaultRouter()
router.register('pics', PicSerializerViewSet, 'pics')

urlpatterns = router.urls