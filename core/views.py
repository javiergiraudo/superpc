from django.shortcuts import redirect,render
from .models import Producto, Categoria
from .forms import ProductoForm

# Creando las vistas.

def home(request):
    return render(request, "core/home.html")

def tienda_producto(request):
    data = {"list": Producto.objects.all().order_by('id_producto')}
    return render(request, "core/tienda_producto.html",data)

def ficha_producto(request, id_producto):
    producto = Producto.objects.get(id_producto=id_producto)
    data = {"producto":producto}
    return render(request,"core/ficha_producto.html",data)


def producto (request, action, id_producto):
    data= {"mesg":"","form":ProductoForm, "action":action,"id_producto":id_producto}
    
    if action == 'ins':
        if request.method == "POST":
            form = ProductoForm(request.POST, request.FILES)
            if form.is_valid:
                try:
                    form.save()
                    data["mesg"] = "El producto se agrego correctamente"
                except:
                    data["mesg"] = "Error al agregar el producto"
    
    elif action == 'upd':
        objeto = Producto.objects.get(id_producto=id_producto)
        if request.method == "POST":
            form = ProductoForm(data=request.POST, files =request.FILES, instance=objeto)
            if form.is_valid:
                form.save()
                data["mesg"] = "Producto actualizado"
        data["form"] = ProductoForm(instance=objeto)
        
    elif action == 'del':
        try:
            Producto.objects.get(id_producto=id_producto).delete()
            data["mesg"] = "Producto eliminado"
            return redirect(producto , action='ins' , id_producto = '1')
        except:
            data["mesg"] = "Producto no encontrado"
    
    data["list"] =  Producto.objects.all().order_by('id_producto')
    return render(request, "core/producto.html",data)  
                    

def poblar_bd(request):
    Producto.objects.all().delete()
    Producto.objects.create(id_producto=1, producto="Audifonos",
                            detalles="audifonos con luces",
                            imagen="images/audifonos.jpg ",
                            categoria=Categoria.objects.get(idCategoria=1))
    
    return redirect(producto, action='ins', id='-1')
                    
def nosotros(request):
    return render(request, 'core/nosotros.html')

def registrar(request):
    # Lógica para la página de registro
    return render(request, 'core/registrar.html')

def ingresar(request):
    # Lógica para la página de ingreso
    return render(request, 'core/ingresar.html')

def api(request):
    return render(request, 'core/api.html')