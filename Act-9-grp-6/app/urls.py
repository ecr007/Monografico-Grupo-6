from django.urls import path
from rest_framework.routers import DefaultRouter
from app.sets import ClientViewSet
from app.sets import PhoneViewSet

router = DefaultRouter()

# Appending Routes
router.register(r'client', ClientViewSet, basename='Client')
router.register(r'phone', PhoneViewSet, basename='Phone')

# urlpatterns = [
# 	path(
# 		'client/xx/<int:pk>/',
# 		ClientViewSet.as_view({'get': 'retrieve'})
# 	),
# ]

urlpatterns = router.urls