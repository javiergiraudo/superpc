// Espera a que el documento HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  // Obtén todos los elementos de la clase "card-text"
  var descripciones = document.getElementsByClassName('card-text');

  // Itera sobre cada elemento de descripción
  for (var i = 0; i < descripciones.length; i++) {
    var descripcion = descripciones[i];
    var botonMostrar = document.createElement('button');
    botonMostrar.textContent = 'Mostrar descripción';
    botonMostrar.classList.add('btn');
    botonMostrar.classList.add('btn-sm');
    botonMostrar.classList.add('btn-primary');
    botonMostrar.addEventListener('click', function() {
      var descripcion = this.parentNode.querySelector('.card-text');
      if (descripcion.style.display === 'none') {
        descripcion.style.display = 'block';
        this.textContent = 'Ocultar descripción';
      } else {
        descripcion.style.display = 'none';
        this.textContent = 'Mostrar descripción';
      }
    });

    // Inserta el botón antes de la descripción
    descripcion.parentNode.insertBefore(botonMostrar, descripcion);
    descripcion.style.display = 'none';
  }
  
});
// Espera a que el documento HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  // Obtén todos los elementos de la clase "card-text"
  var descripciones = document.getElementsByClassName('card-text');

function mostrar1(){
  document.getElementById("servicio1").style.display="block";
}
function ocultar1(){
  document.getElementById("servicio1").style.display="none";
}
function mostrar2(){
  document.getElementById("servicio2").style.display="block";
}

function ocultar2(){
  document.getElementById("servicio2").style.display="none";
}
function mostrar3(){
  document.getElementById("servicio3").style.display="block";
}

function ocultar3(){
  document.getElementById("servicio3").style.display="none";
}
function mostrar4(){
  document.getElementById("servicio4").style.display="block";
}

function ocultar4(){
  document.getElementById("servicio4").style.display="none";
}
function mostrar5(){
  document.getElementById("servicio5").style.display="block";
}

function ocultar5(){
  document.getElementById("servicio5").style.display="none";
}
function mostrar6(){
  document.getElementById("servicio6").style.display="block";
}

function ocultar6(){
  document.getElementById("servicio6").style.display="none";
}


  $('#form').validate({ 
    rules: {
        'categoria': {
            required: true,
            min: 1,
        },
        'producto': {
            required: true,
            min: 1,
        },
        'cantidad': {
            required: true,
            digits: true,
            number: true,
            min: 1
        },
    },
    messages: {
        'categoria': {
            required: 'Debe seleccionar la categoría del producto',
            min: 'Debe seleccionar la categoría del producto',
        },
        'producto': {
            required: 'Debe seleccionar el nombre del producto',
            min: 'Debe seleccionar el nombre del producto',
        },
        'cantidad': {
            required: 'Debe ingresar la cantidad',
            number: 'Debe ingresar un número',
            digits: 'Debe ingresar un número entero',
            min: 'Debe ingresar un número mayor que cero',
        },
    },
    errorPlacement: function(error, element) {
        error.insertAfter(element); // Inserta el mensaje de error después del elemento
        error.addClass('error-message'); // Aplica una clase al mensaje de error
    },
  });

  var sin_imagen = '/static/core/img/sin-imagen.png';

// COMBOBOX DEPENDIENTES PARA CATEGORIA Y PRODUCTO
  $("#id_categoria").change(function() {
    var categoriaId = $(this).val();
    if (categoriaId) {
      $.ajax({
        url: $('#url_obtener_productos').val(),
        data: {
          'categoria_id': categoriaId
        },
        dataType: 'json',
        success: function(data) {
          $("#id_producto").empty();
          $('#cuadro-imagen').attr('src', sin_imagen);
          if (data.length === 0) {
            $("#id_producto").append(`<option value="-1" data-imagen="${sin_imagen}">No hay productos disponibles</option>`);
          } else {
            $("#id_producto").append(`<option value="-1" selected="" data-imagen="${sin_imagen}">Seleccione un producto</option>`);
            $.each(data, function(key, value) {
              $("#id_producto").append(`<option value="${value.id}" data-imagen="${value.imagen}"> ${value.nombre} </option>`);
            });
          }
          $("#id_producto").prop('disabled', false);
        }
      });
    } else {
      $("#id_producto").empty();
      $("#id_producto").prop('disabled', true);
    }
  });

$(document).ready(function() {

  $.get('https://fakestoreapi.com/products', // API donde se obtienen los datos

    function(registros){

      var premioHTML = $('#premio').prop('outerHTML');
      premioHTML = premioHTML.replace('d-none', '');

      $('#lista').empty();

      $.each(registros, function(i, item) {  // Recorrer los registros devueltos por la API

        // Crear el codigo HTML para agegar un recuadro a la lista de premios
        recuadro = premioHTML;
        recuadro = recuadro.replace('src=""', `src="${item.image}"`);
        recuadro = recuadro.replace('[[nombre]]', item.title);
        recuadro = recuadro.replace('[[precio]]', item.price);
        recuadro = recuadro.replace('[[descripcion]]', item.description);
        
        // Agregar el recuadro a la lista de premios
        $('#lista').append(recuadro);
      
    });

    setTimeout(`
      $('#imagen-de-espera').hide();
      $('#capa-cubre-todo').hide();
      `, 2000);

  });

});

class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

class UI {
  addProduct() {
    const productList= document.getElementById('product-list');
    const element = document.createElement('div');
    element.innerHTML = `
        <div class="card text-center mb-4">
          <div class="card-body">
          <strong>Nombre servicio</strong>: ${product.name}
          <strong>Precio servicio</strong>: ${product.price}
          <strong>Descripción servicio</strong>: ${product.description}
          <a href"#" class="btn btn-danger" name="delete">Delete</a>
          </div>
        </div>
    `;
    productList.appendChild(element);

  }

  deleteProduct() {
    if(element.name === 'delete') {
      element.parentElement.parenElement.parenElement.remove();
      this.showMessage('Servicio eliminado con exíto','info');
    }
  }

  showMessage(message, cssClass) {
    const div = document.createElement('div');
    div.className = `alert-alert-${cssClass}`;
    div.appendChild(document.createTextNode(message))
    //show in DOM
    const container = document.querySelector('.container');
    const app = document.querySelector('#App');
    container.insertBefore(div, app)
    setTimeout(function (){
      document.querySelector('.alert').remove();
    }, 3000);

  }
}

// DOM Events
document.getElementById('product-form')
    .addEventListener('submit',function(){
      const name = document.getElementById('name').value
      const price = document.getElementById('price').value
      const description = document.getElementById('description').value

      const product = new Product(name, price, description);

      const ui = new UI();

      if(name === '' || price === '' || description === ''){
        return ui.showMessage('Complete los campos por favor', 'danger')
      }

      ui.addProduct(product)
      ui.resetform();
      ui.showMessage('Servicio añadido con exíto','success');

      e.preventDefault();



    });})