
/* ============= FUNCIONES ================ */



function validarFormulario (e) {
        e.preventDefault();
      
}



function respuestaRegistrarse() {
    
    let miCuenta = document.getElementById("miCuenta");

    let formularioContainer = document.createElement("div")

    formularioContainer.innerHTML = `<h5>REGISTRARSE</h5>
    
                                    <form id="miCuentaForm">
                                        <input type="text" placeholder="Ingrese su nombre" id="nombreIngresar">
                                        <input type="email" placeholder="E-mail" id="emailIngresar">
                                        <input type="password" placeholder="Contraseña" id="contrasenaIngresar">
                                        <input type="submit" value="REGISTRARSE">
                                    </form>
                                    
                                    <input type="button" value="X" id="botonCerrar">`;

    miCuenta.append(formularioContainer)
}







function agregarAlCarro(libroId) {
    
    const existe = carritoArr.some((element) => element.id === libroId);
        
    if (existe == true) {
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
                )
            }
      })

    
    
}

function actualizarPrecio(inputValue, libroId) {

    /* const precioCantidad = document.getElementById("precioCantidad"); */

    if (inputValue >= 1) {
        const carrActualizado = carritoArr.map(element => {
            return {
                id: element.id,
                nombre: element.nombre,
                precio: element.precio,
                cantidad: element.cantidad
            }
        })

        const libroSeleccionado = carrActualizado.find((element) => {
            if (element.id == libroId) {
                element.precio * inputValue;
                element.cantidad * inputValue;
            }
        })
        /* precioLibroFinal = precioCarr * inputValue;
        precioCantidad.innerHTML = "$" + precioLibroFinal; */

        console.log(carrActualizado);
    }
    
    
}



function actualizarCarro() { 

    carritoContainer.innerHTML = "";

    for (const libro of carritoArr) {

        let div = document.createElement("div");
        div.className = ("libroEnCarrito")

        div.innerHTML = `<a href=""><img class="libroPortadaEnCarrito" src=${libro.img}></a>
                            <div> 
                                <p id="precioCantidad" class="precio-libro_en-carrito">Precio: $${libro.precio}</p>
                                <span id="precioCantidad">Cantidad:<input type="number" class="input-cantidad" id="inputCantidad" value="1"></span>
                                <p>${libro.condicion}</p>
                            </div>

                        <button id="botonEliminar-${libro.id}" type="button" class="btn btn-light">ELIMINAR</button>`;

        carritoContainer.append(div);

        localStorage.setItem("carritoArr", JSON.stringify(carritoArr));

        const botonEliminar = document.getElementById(`botonEliminar-${libro.id}`);

        botonEliminar.addEventListener("click", () => {
            eliminarDelCarro(libro.id)
        });

        const inputCantidad = document.getElementById("inputCantidad");
        inputCantidad.addEventListener("change", cambiarCantidad(libro.id))
    }

    contadorCarrito.innerText = carritoArr.length;
    precioTotal.innerText = "Precio Final: " + carritoArr.reduce((acc, libro) => acc + libro.precio, 0);

}


function cambiarCantidad(libroId) {
    
    
    const input = inputCantidad;
    if (input.value <= 0) {
        input.value = 1;
    }

    actualizarPrecio(input.value, libroId)

    console.log("cambio");

}



function finalizarCompra() {
    if (carritoArr.length > 0) {
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








/* ============= ARRAY CON CADA LIBRO ================ */




const libros = [
    {id: 0, titulo: 'CUENTOS COMPLETOS', autor: 'EDGAR ALLAN POE', precio: 1200, cantidad: 1, condicion: "Nuevo", img: "img/libros-portadas/portada-eap.jpg"},
    {id: 1, titulo: 'EL ALEPH', autor: 'JORGE LUIS BORGES', precio: 110, cantidad: 1, condicion: "Nuevo", img: "img/libros-portadas/portada-el-aleph.png"},
    {id: 2, titulo: 'FINAL DEL JUEGO', autor: 'JULIO CORTÁZAR', precio: 460, cantidad: 1, condicion: "Usado", img: "img/libros-portadas/portada-final-del-juego.jpg"},
    {id: 3, titulo: 'HISTORIAS DE CRONOPIOS Y DE FAMAS', autor: 'JULIO CORTÁZAR', precio: 320, cantidad: 1, condicion: "Usado", img: "img/libros-portadas/portada-hcyf.jpg"},
    {id: 4, titulo: 'LA ILIADA', autor: 'HOMERO', precio: 920, cantidad: 1, condicion: "Nuevo", img: "img/libros-portadas/portada-la-iliada.jpg"},
    {id: 5, titulo: 'LA ODISEA', autor: 'HOMERO', precio: 800, cantidad: 1, condicion: "Nuevo", img: "img/libros-portadas/portada-la-odisea.png"},
];


/* ============== DOM Y EVENTOS ================= */


fetch("/data.json")
.then((response) => response.json())
.then(data => {
    
    data.forEach(libro => {
        const div = document.createElement("div");
        div.className = "libros-container";

        div.innerHTML = `<a href=""><img class="libros-portadas" src=${libro.img}></a>
            <h3 class="titulos-libros">${libro.titulo}</h3>   
            <p>$${libro.precio}</p> 
            <button id="botonAdd-${libro.id}" type="button" class="btn btn-outline-dark">AGREGAR</button>`;

        librosRecomendados.append(div)

        let botonAdd = document.getElementById(`botonAdd-${libro.id}`);

        botonAdd.addEventListener("click", () => {
            agregarAlCarro(libro.id)
        })
    });
});




const botonFinalizarCompra = document.getElementById("botonFinalizarCompra");
botonFinalizarCompra.addEventListener("click", finalizarCompra);

const carritoContainer = document.getElementById("carrito");
const librosRecomendados = document.getElementById("librosRecomendados");
const contadorCarrito = document.getElementById("contadorCarrito");
const precioTotal = document.getElementById("precioTotal");



let carritoArr = [];


document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("carritoArr")) {
        carritoArr = JSON.parse(localStorage.getItem("carritoArr"));
        actualizarCarro();
    }
});







/* ============ REGISTRARSE ============ */



let registrarse = document.getElementById("registrarseBoton")
registrarse.addEventListener("click", respuestaRegistrarse)



class Usuario {
    constructor(nombre, email, contraseña){
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
    }
}

const usuarios = [];

let nombreIngresado = document.getElementById("nombreIngresar");
let emailIngresado = document.getElementById("emailIngresar");
let contraseñaIngresada = document.getElementById("contrasenaIngresar");

usuarios.push(new Usuario(nombreIngresado, emailIngresado, contraseñaIngresada));

let miCuentaForm = document.getElementById("miCuentaForm")

miCuenta.addEventListener("submit", validarFormulario)








