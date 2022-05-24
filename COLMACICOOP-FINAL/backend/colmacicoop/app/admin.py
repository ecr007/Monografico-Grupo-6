from django.contrib import admin
from app.models import *

# Register your models here.
admin.site.register(Network,NetworkAdmin)
admin.site.register(Option,OptionAdmin)
admin.site.register(Slide,SlideAdmin)
admin.site.register(Faq,FaqAdmin)
admin.site.register(Service,ServiceAdmin)
admin.site.register(Benefit,BenefitAdmin)
admin.site.register(Cms,CmsAdmin)
admin.site.register(Affiliate,AffiliateAdmin)
admin.site.register(Contact,ContactAdmin)
