from django.db import models
from comment.models import Comment
# Create your models here.
class Reply(models.Model):
    user = models.ForeignKey(Comment, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE)
    text = models.CharField(max_length=500)