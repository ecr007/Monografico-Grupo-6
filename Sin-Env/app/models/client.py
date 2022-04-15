from django.db import models

class Client(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    age = models.IntegerField()

  	#def __str__(self):
	#return '%s %s' % (self.first_name, self.last_name)