from django.urls import path
from . import views


urlpatterns =[
    path ('<slug:pk>/',views.get_all_comments)
]