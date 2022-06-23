from pyexpat import model
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment
from .serializers import CommentSerializer

# Create your views here.
@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_comments(request):
  if  request.method == 'GET':
    comment = Comment.video_id.all()
    serializer = CommentSerializer(comment, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view([ 'POST','PUT'])
@permission_classes([IsAuthenticated])
def user_cars(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
         serializer = CommentSerializer(data=request.data)
         if serializer.is_valid():
            serializer.save(user=request.user)
         return Response(serializer.data, status=status.HTTP_201_CREATED)
    elif request.method == 'PUT':
        serializer= CommentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response (serializer.data, status=status.HTTP_200_OK)
