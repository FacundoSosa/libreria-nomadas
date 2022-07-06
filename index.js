
let opcion = prompt ("Ingrese una opción por su número: \n 1) Buscar un libro \n 2) Ver carrito \n 3) Registrarse \n 4) Catálogo")

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
}



