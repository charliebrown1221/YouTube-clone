from django.db import models
from reply.models import Reply
# Create your models here.
class Comment(models.Model):
    user = models.ForeignKey(Reply, on_delete=models.CASCADE)
    video_id = models.CharField(max_length=500)
    text = models.CharField(max_length=500)
    likes = models.IntegerField()
    dislikes = models.IntegerField()