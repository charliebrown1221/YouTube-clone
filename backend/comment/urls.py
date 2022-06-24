from django.urls import path
from . import views

## This is going to direct the user to specific views and needs the correct parameter & method combination

urlpatterns =[
    path('add/', views.add_comment),                            # POST (authenticated)
    
    path('update/<int:pk>/',views.update_comment),            # GET by ID, PUT, DELETE, opt PATCH (need id)
    path ('<str:video_id>/',views.get_all_comments),
    # path('', views.user_comment),                               # GET ALL (no-authentication),

    

]