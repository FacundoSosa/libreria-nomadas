
/* let opcion = prompt ("Ingrese una opción por su número: \n 1) Buscar un libro \n 2) Ver carrito \n 3) Registrarse \n 4) Catálogo")

if (opcion == 1) {
    
    const libros = [
    {titulo: 'cuentos completos', autor: 'edgar allan poe', precio: 1000},
    {titulo: 'el aleph', autor: 'jorge luis borges', precio: 800},
    {titulo: 'final del juego', autor: 'julio cortazar', precio: 1200},
    {titulo: 'historias de cronopios y de famas', autor: 'julio cortazar', precio: 650},
    {titulo: 'la iliada', autor: 'homero', precio: 920},
    {titulo: 'la odisea', autor: 'homero', precio: 590},
]

    let busqueda = prompt("Buscar por titulo").toLowerCase()

    const resultado = libros.find((el) => el.titulo == busqueda)
    alert("Tenemos ese libro, su precio es $" + resultado.precio);

} else if (opcion == 2) {

    const compra = [
        {titulo: 'historias de cronopios y de famas', autor: 'julio cortazar', precio: 650},
        {titulo: 'cuentos completos', autor: 'edgar allan poe', precio: 1000},
        {titulo: 'la odisea', autor: 'homero', precio: 590}
    ]

    const total = compra.reduce ((acc, el) => acc + el.precio, 0)
    alert ("El precio final de su compra es: " + total)
 
} else if (opcion == 3) {
    

    class Usuario {
        constructor(nombre, email, contraseña){
            this.nombre = nombre.toLowerCase();
            this.email = email;
            this.contraseña = contraseña;
        }
    }
    
    const usuarios = [];
    
    let nombreIngresado = prompt ("Ingrese su nombre")
    let emailIngresado = prompt ("Ingrese su email")
    let contraseñaIngresada = prompt ("Ingrese su contraseña")
    
    usuarios.push(new Usuario(nombreIngresado, emailIngresado, contraseñaIngresada));
    
    alert("Usuario registrado correctamente")


} else if (opcion == 4) {
    
    const libros = [
        {titulo: 'cuentos completos', autor: 'edgar allan poe', precio: 1000},
        {titulo: 'el aleph', autor: 'jorge luis borges', precio: 800},
        {titulo: 'final del juego', autor: 'julio cortazar', precio: 1200},
        {titulo: 'historias de cronopios y de famas', autor: 'julio cortazar', precio: 650},
        {titulo: 'la iliada', autor: 'homero', precio: 920},
        {titulo: 'la odisea', autor: 'homero', precio: 590},
    ]
    
    const catalogo = libros.map ((el) => el.titulo)
    
    alert(`Este es nuestro catálogo: ${catalogo}`);
    
} else {
    alert ("Ingrese un número")
} */

/* function respuestaFiltro() {
    filtrados = libros.filter(el => el.precio <= filtro)  

    for (const libro of filtrados) {
        let librosContainer = document.createElement("div");
    
        librosContainer.innerHTML = `<a href=""><img class="libros-portadas" src=${libro.img}></a>
                                     <h3>${libro.titulo}</h3>   
                                     <p>$${libro.precio}</p>   
                                     <input class="botones-comprar" type="button" value="COMPRAR">`;
    
        librosRecomendados.append(librosContainer);                           
    }
} */




function validarFormulario (e) {
        e.preventDefault();
        alert("Usuario registrado correctamente")
}

function respuestaFiltro1() {
    filtrados = libros.filter(el => el.precio <= 400)

    for (const libro of filtrados) {
        let librosContainer = document.createElement("div");
    
        librosContainer.innerHTML = `<a href=""><img class="libros-portadas" src=${libro.img}></a>
                                     <h3>${libro.titulo}</h3>   
                                     <p>$${libro.precio}</p>   
                                     <input class="botones-comprar" type="button" value="COMPRAR">`;
    
        librosRecomendados.append(librosContainer);                           
    }
}

function respuestaFiltro2() {
    filtrados = libros.filter(el => el.precio <= 800)

    for (const libro of filtrados) {
        let librosContainer = document.createElement("div");
    
        librosContainer.innerHTML = `<a href=""><img class="libros-portadas" src=${libro.img}></a>
                                     <h3>${libro.titulo}</h3>   
                                     <p>$${libro.precio}</p>   
                                     <input class="botones-comprar" type="button" value="COMPRAR">`;
    
        librosRecomendados.append(librosContainer);                           
    }
}

function respuestaFiltro3() {
    filtrados = libros.filter(el => el.precio <= 1200)

    for (const libro of filtrados) {
        let librosContainer = document.createElement("div");
    
        librosContainer.innerHTML = `<a href=""><img class="libros-portadas" src=${libro.img}></a>
                                     <h3>${libro.titulo}</h3>   
                                     <p>$${libro.precio}</p>   
                                     <input class="botones-comprar" type="button" value="COMPRAR">`;
    
        librosRecomendados.append(librosContainer);                           
    }
}

const libros = [
    {titulo: 'CUENTOS COMPLETOS', autor: 'edgar allan poe', precio: 1200, condicion: "nuevo", img: "img/libros-portadas/portada-eap.jpg"},
    {titulo: 'EL ALEPH', autor: 'jorge luis borges', precio: 110, condicion: "nuevo", img: "img/libros-portadas/portada-el-aleph.png"},
    {titulo: 'FINAL DEL JUEGO', autor: 'julio cortazar', precio: 460, condicion: "usado", img: "img/libros-portadas/portada-final-del-juego.jpg"},
    {titulo: 'HISTORIAS DE CRONOPIOS Y DE FAMAS', autor: 'julio cortazar', precio: 320, condicion: "usado", img: "img/libros-portadas/portada-hcyf.jpg"},
    {titulo: 'LA ILIADA', autor: 'homero', precio: 920, condicion: "nuevo", img: "img/libros-portadas/portada-la-iliada.jpg"},
    {titulo: 'LA ODISEA', autor: 'homero', precio: 800, condicion: "nuevo", img: "img/libros-portadas/portada-la-odisea.png"},
];


let librosRecomendados = document.getElementById("librosRecomendados");

const filtro1 = document.getElementById("filtro1")
filtro1.addEventListener("click", respuestaFiltro1)

const filtro2 = document.getElementById("filtro2")
filtro2.addEventListener("click", respuestaFiltro2)

const filtro3 = document.getElementById("filtro3")
filtro3.addEventListener("click", respuestaFiltro3)


let formulario = document.getElementById("formulario")

formulario.addEventListener("submit", validarFormulario)













