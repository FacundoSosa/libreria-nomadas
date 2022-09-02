

//PETICIÓN DE DATOS HECHA CON FETCH

const pedirLibros = async () => {
    const response = await fetch("http://127.0.0.1:5501/data.json", )

    const data = await response.json();
    
    data.forEach(libro => {
        catalogo.push(libro)
    });
    
    //Recorridos del array traido desde el json para separar en categorías los libros
    for (let i = 0; i < 6; i++) {
        librosRecomendados.push(data[i]);
        librosRecomendadosContainer.innerHTML = "";
        crearLibros(librosRecomendados, librosRecomendadosContainer);
    }

    for (let i = 6; i < 12; i++) {
        novedades.push(data[i]);
        novedadesContainer.innerHTML = "";
        crearLibros(novedades, novedadesContainer);
    }

    for (let i = 12; i < 18; i++) {
        masVendidos.push(data[i]);
        masVendidosContainer.innerHTML = "";
        crearLibros(masVendidos, masVendidosContainer)
    }
}

pedirLibros()


//FUNCIÓN QUE MUESTRA LOS LIBROS EN EL DOM

function crearLibros(libros, librosContainer){

    for (const libro of libros) {
        
        const div = document.createElement("div");
            div.className = "libros-container";
            div.innerHTML = `<a href=""><img class="libros-portadas" src=${libro.img}></a>
                <h3 class="titulos-libros">${libro.titulo}</h3>   
                <h3 class="titulos-libros-autor">${libro.autor}</h3>   
                <p>$${libro.precio}</p> 
                <button id="botonAdd-${libro.id}" type="button" class="btn btn-outline-dark btn-agregar">AGREGAR</button>`;

                librosContainer.append(div)
            
                let botonAdd = document.getElementById(`botonAdd-${libro.id}`);
    
                botonAdd.addEventListener("click", () => {
                    agregarAlCarro(libro.id, libros)
                });    
    }  
}


//FUNCIONES DEL BUSCADOR

function buscarLibro() {

    //Función que busca en el catálogo de libros y filtra los datos ingresados
    const resultado =  catalogo.filter(element => 
        element.titulo.includes(buscadorInput.value.toUpperCase()) ||
        element.autor.includes(buscadorInput.value.toUpperCase()) || 
        element.ISBN.includes(buscadorInput.value.toUpperCase())
    );

    //Función que muestra los libros en el DOM
    crearLibrosBuscador(resultado);

    //Mejoran la usabilidad del buscador
    if (buscadorInput.value.length < 1) {
        buscadorContainer.innerHTML = "";
    }

    if (resultado.length == 0) {
        const div = document.createElement("div");
        div.className = "buscador-resultado";

        div.innerHTML = `<div class="buscador-container-2">
                            <p>No se encontraron libros</p>
                        </div>`;

        buscadorContainer.append(div);
    }
}

function crearLibrosBuscador(resultado) {

    buscadorContainer.innerHTML = "";
   
    for (const libro of resultado) {
        const div = document.createElement("div");
        div.className = "buscador-resultado";

        div.innerHTML = `<div class="buscador-container-2">
                            <img class="portada-buscador" src="${libro.img}" alt="portada.jpg">
                                <div class="buscador-container-3">
                                    <h3 class="titulo-buscador">${libro.titulo}</h3>
                                    <p class="texto-buscador">${libro.autor}</p>
                                    <p class="texto-buscador">$${libro.precio}</p>
                                </div>
                         </div>
                        <button id="botonAdd-${libro.id}" type="button" class="btn-agregar-buscador btn btn-outline-dark btn-sm">
                            AGREGAR
                        </button>`;

        buscadorContainer.append(div);

        //Evento para agregar un libro al carrito desde el buscador
        let botonAdd = document.getElementById(`botonAdd-${libro.id}`);
            botonAdd.addEventListener("click", () => {
                agregarAlCarro(libro.id, resultado)
            }); 
    }
}


// FUNCIONES DEL CARRITO DE COMRPAS

function agregarAlCarro(libroId, libros) {
    
    const existe = carritoArr.some((element) => element.id === libroId);
        
    if (existe) {
        const libros = carritoArr.map(element => {
            if (element.id === libroId) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: false,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'info',
                    title: 'Este producto ya está en el carrito!'
                  })
            }
        })
    } else {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: false,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Producto agregado al carrito!'
          })

        const libroSeleccionado = libros.find((element) => element.id === libroId);
        carritoArr.push(libroSeleccionado);
    }
          
    actualizarCarro(); 
 }

 function eliminarDelCarro(libroId) {

    Swal.fire({
        title: '¿De verdad quieres eliminarlo?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, adelante',
        cancelButtonText: 'No, no quiero'
      }).then((result) => {
            if (result.isConfirmed) {
                const libroSeleccionado = carritoArr.find((element) => element.id === libroId);
                const indice = carritoArr.indexOf(libroSeleccionado);
                carritoArr.splice(indice, 1);
                actualizarCarro();
                    Swal.fire(
                        'Eliminado!',
                        'Has retirado tu libro del carrito',
                        'success'
                    );
                }
      }); 
}

function actualizarCarro() { 

    carritoContainer.innerHTML = "";

    //Cards del carrito
    for (const libro of carritoArr) {

        let div = document.createElement("div");
        div.className = ("libroEnCarrito")

        div.innerHTML = `<a href=""><img class="libroPortadaEnCarrito" src=${libro.img}></a>
                            <div>  
                                <p class="precio-libro_en-carrito">Precio: $${libro.precio}</p>
                                <span>
                                    Cantidad: 
                                    <button class="btn-cantidad bg-light" id="btnMas-${libro.id}">+</button>
                                    ${libro.cantidad}
                                    <button class="btn-cantidad bg-light" id="btnMenos-${libro.id}">-</button>
                                </span>
                                <p>${libro.condicion} </p>
                            </div>

                        <button id="botonEliminar-${libro.id}" type="button" class="btn btn-light">ELIMINAR</button>`;

        carritoContainer.append(div);

        localStorage.setItem("carritoArr", JSON.stringify(carritoArr));

        //Eventos del carrito
        const botonEliminar = document.getElementById(`botonEliminar-${libro.id}`);
        botonEliminar.addEventListener("click", () => {
            eliminarDelCarro(libro.id)
        });
        const btnMas = document.getElementById(`btnMas-${libro.id}`);
        btnMas.addEventListener("click", () => {
            aumentarCantidad(libro.id)
        });
        const btnMenos = document.getElementById(`btnMenos-${libro.id}`);
        btnMenos.addEventListener("click", () => {
            disminuirCantidad(libro.id)
        })
    }

    //Contador, importe final y finalizar compra
    contadorCarrito.innerText = carritoArr.length;
    precioTotal.innerText = "IMPORTE FINAL: $" + carritoArr.reduce((acc, libro) => acc + libro.precio * libro.cantidad, 0);
    const botonFinalizarCompra = document.getElementById("botonFinalizarCompra");
    botonFinalizarCompra.addEventListener("click", finalizarCompra);
}

function finalizarCompra() {
   if (carritoArr.length > 0) {
    carritoArr.length = 0;
    localStorage.clear();
    actualizarCarro();

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Gracias por comprar',
        showConfirmButton: true
      })
   } else {
        Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'Agrega algo al carrito antes',
            showConfirmButton: true
        })
   }
}


//FUNCIONES QUE ADMINISTRAN LAS CANTIDADES DE LOS PRODUCTOS EN EL CARRITO
function aumentarCantidad(libroId) {
    console.log("aumenta el libro" + libroId);
    const libroSeleccionado = carritoArr.find(element => {
        if (element.id == libroId) {
            return {
                id: element.id,
                titulo: element.titulo,
                cantidad: element.cantidad++,
                precio: element.precio
            }
        } 
    })

    actualizarCarro()

}

function disminuirCantidad(libroId) {
    console.log("disminuye el libro" + libroId);
    const libroSeleccionado = carritoArr.find(element => {
        if (element.id == libroId) {
            return {
                id: element.id,
                titulo: element.titulo,
                cantidad: element.cantidad--,
                precio: element.precio
            }
        }  
    })

    if (libroSeleccionado.cantidad <= 0) {
        libroSeleccionado.cantidad = 1;
    }
    
    actualizarCarro();

}


let librosRecomendados = [];
let novedades          = [];
let masVendidos        = [];
let ofertas            = [];
let catalogo           = [];


//Evento del DOM para hacer funcionar al LocalStorage
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("carritoArr")) {
        carritoArr = JSON.parse(localStorage.getItem("carritoArr"));
        actualizarCarro();
    }
});

//Llamado al buscador de libros para asignarle una función
const buscadorInput = document.getElementById("buscadorInput");
buscadorInput.addEventListener("input", buscarLibro)

//Containers llamados desde el DOM
const contadorCarrito = document.getElementById("contadorCarrito");
const precioTotal = document.getElementById("precioTotal");
const carritoContainer = document.getElementById("carrito");
const librosRecomendadosContainer = document.getElementById("librosRecomendados");
const novedadesContainer = document.getElementById("novedades");
const masVendidosContainer = document.getElementById("masVendidos");
const ofertasContainer = document.getElementById("ofertas");
const buscadorContainer = document.getElementById("buscadorContainer");

//Array del carrito de compras
let carritoArr = [];









    









