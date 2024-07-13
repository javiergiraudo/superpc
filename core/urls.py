
from django.urls import path
from .views import home, poblar_bd, producto, tienda_producto, ficha_producto,nosotros ,registrar, ingresar,api

urlpatterns = [
    path('', home, name="home"),
    path('poblar_bd/', poblar_bd, name="poblar_bd"),
    path('producto/<str:action>/<int:id_producto>/', producto, name="producto"),
    path('tienda_producto/', tienda_producto, name="tienda_producto"),
    path('ficha_producto/<int:id_producto>/', ficha_producto, name="ficha_producto"),
    path('nosotros/', nosotros, name="nosotros"),
    path('registrar/', registrar, name="registrar"),
    path('ingresar/', ingresar, name="ingresar"),
    path('api/',api,name="api"),
]

