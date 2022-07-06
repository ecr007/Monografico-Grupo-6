from rest_framework import viewsets, status
from rest_framework.response import Response
from app.models import Contact
from app.serializers import ContactSerializer
from django.conf import settings
from django.core.mail import EmailMessage

class ContactViewSet(viewsets.ViewSet):

    def create(self, request):
        serializer = ContactSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            # Send Email
            subject = serializer.data['subject']

            html_content = "<h1>Folmulario de Contacto ~ COLMACICOOP</h1><p>Teléfono: %s<br><br>%s</p>" % (serializer.data['phone'], serializer.data['message'])

            from_email = settings.EMAIL_HOST_USER

            to = settings.DEV_EMAIL

            msg = EmailMessage(
                subject,
                html_content,
                from_email,
                [to],
                reply_to = [serializer.data['email']]
            )

            msg.content_subtype = "html"  # Main content is now text/html
            msg.send()

            return Response(status=status.HTTP_201_CREATED)

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )