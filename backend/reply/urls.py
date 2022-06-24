from django.urls import path
from . import views

urlpatterns=[
    path('<str:comment>/', views.reply_by_id),
]