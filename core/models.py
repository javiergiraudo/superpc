from django.db import models

# Creando el modelo categoria de de productos.
class Categoria(models.Model):
    idCategoria = models.IntegerField(primary_key=True, verbose_name="Id categoría")
    nombreCategoria = models.CharField(max_length=150, blank=False, null=False, verbose_name="Nombre de la categoría")

    def __str__(self):
        return self.nombreCategoria

# Creando el modelo producto

class Producto(models.Model):
    id_producto = models.IntegerField(primary_key=True, verbose_name="id del producto")
    producto = models.CharField(max_length=80, blank=False, null=False, verbose_name="nombre del producto")
    detalles = models.CharField(max_length=300, null=True, blank=True, verbose_name="detalles del producto")
    imagen = models.ImageField(upload_to="images/", default="nn.jpg", null=False, blank=False, verbose_name="Imagen")
    categoria = models.ForeignKey(Categoria, on_delete=models.DO_NOTHING)

    def __str__(self):
        return self.producto
