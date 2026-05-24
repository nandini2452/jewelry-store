from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from .models import Banner
from .serializers import BannerSerializer


# BANNERS API

@api_view(['GET'])
def banner_list(request):

    banners = Banner.objects.all()
    serializer = BannerSerializer(banners, many=True)

    return Response(serializer.data)


# LOGIN API

@api_view(['POST'])
def login(request):

    phone = request.data.get("phone")
    otp = request.data.get("otp")

    # HARDCODED OTP
    if otp == "9081":

        refresh = RefreshToken.for_user(request.user)

        return Response({

            "message": "Login successful",

            "access": str(refresh.access_token),
            "refresh": str(refresh),

            "phone": phone

        })

    return Response({

        "message": "Invalid OTP"

    }, status=400)