from rest_framework import viewsets, status
from rest_framework.response import Response
from app.models import Affiliate
from app.serializers import AffiliateSerializer
from django.core.mail import EmailMessage
from django.conf import settings

class AffiliateViewSet(viewsets.ViewSet):

    def create(self, request):
        serializer = AffiliateSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            # Send Email
            subject = "Nuevo Afiliado: %s" % (serializer.data["fullname"])

            html_content = "<h1>%s</h1><table border='1'> <tr> <th style='text-align:left;'>Nombre Completo:</th><td>%s</td> </tr> <tr> <th style='text-align:left;'>Cédula:</th><td>%s</td> </tr> <tr> <th style='text-align:left;'>Teléfono:</th><td>%s</td> </tr> <tr> <th style='text-align:left;'>Celular:</th><td>%s</td> </tr> </table>" % (subject,serializer.data['fullname'],serializer.data['cedula'],serializer.data['phone'],serializer.data['mobile'])

            from_email = settings.EMAIL_HOST_USER

            to = settings.DEV_EMAIL

            msg = EmailMessage(
                subject,
                html_content,
                from_email,
                [to]
            )

            msg.content_subtype = "html"  # Main content is now text/html
            msg.send()

            return Response(status=status.HTTP_201_CREATED)

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )