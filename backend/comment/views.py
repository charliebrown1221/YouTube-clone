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
    return Response(serializer.data)

