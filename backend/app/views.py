from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from app.models import BlogPost
from app.serializers import BlogPostSerializer

# Create your views here.
class BlogPostListView(ListAPIView):
    queryset=BlogPost.objects.order_by('-date_created')
    serializer_class=BlogPostSerializer
    lookup_field='slug'
    permission_class=(permissions.AllowAny,)

class BlogPostDetailView(RetrieveAPIView):
    queryset=BlogPost.objects.order_by('-date_created')
    serializer_class=BlogPostSerializer
    lookup_field='slug'
    permission_class=(permissions.AllowAny,)

class BlogPostFeaturedView(ListAPIView):
    queryset=BlogPost.objects.all().filter(featured=True)
    serializer_class=BlogPostSerializer
    lookup_field='slug'
    permission_class=(permissions.AllowAny,)


