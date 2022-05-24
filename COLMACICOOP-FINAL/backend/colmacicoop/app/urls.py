from django.urls import path
from rest_framework.routers import DefaultRouter
from app.sets import *
# from app.sets import PhoneViewSet

router = DefaultRouter()

# Appending Routes
router.register(r'network', NetworkViewSet, basename='Network')
router.register(r'option', OptionViewSet, basename='Option')
router.register(r'slide', SlideViewSet, basename='Slide')
router.register(r'faq', FaqViewSet, basename='Faq')
router.register(r'service', ServiceViewSet, basename='Service')
router.register(r'benefit', BenefitViewSet, basename='Benefit')
router.register(r'cms', CmsViewSet, basename='Cms')
router.register(r'affiliate', AffiliateViewSet, basename='Affiliate')
router.register(r'contact', ContactViewSet, basename='Contact')

# urlpatterns = [
# 	path(
# 		'client/xx/<int:pk>/',
# 		ClientViewSet.as_view({'get': 'retrieve'})
# 	),
# ]

urlpatterns = router.urls

