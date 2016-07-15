from django.shortcuts import render
from PlayInfo.models import PlayInfoPost
from django.shortcuts import render_to_response

# Create your views here.
def index(request):
    info_list = PlayInfoPost.objects.all()
    return render_to_response('index.html',{'info_list':info_list})