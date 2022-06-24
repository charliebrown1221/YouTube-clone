from django.shortcuts import get_object_or_404
from pyexpat import model
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from .models import Reply
from .serializers import ReplySerializer

# Create your views here.
@api_view([ 'GET','POST'])
@permission_classes([IsAuthenticated])
def reply_by_id(request, ):
   print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
   if  request.method == 'GET':
      serializer = ReplySerializer(user=request.user, many=True)
      return Response(serializer.data, status=status.HTTP_200_OK)
   elif request.method == 'POST':
        serializer = ReplySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)