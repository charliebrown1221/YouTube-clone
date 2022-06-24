from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from .models import Reply
from .serializers import ReplySerializer

# Create your views here.
@api_view([ 'GET','POST'])
@permission_classes([IsAuthenticated])
def reply_by_id(request, comment):
   print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
   if  request.method == 'GET':
      reply = Reply.objects.filter(comment=comment)
      serializer = ReplySerializer(reply, many=True)
      return Response(serializer.data, status=status.HTTP_200_OK)
   elif request.method == 'POST':
      reply=get_object_or_404(Reply,comment=comment)
      serializer = ReplySerializer(reply,data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save(user=request.user)
      return Response(serializer.data, status=status.HTTP_201_CREATED)