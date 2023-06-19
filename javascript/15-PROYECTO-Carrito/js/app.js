//1-CREO LAS VARIABLKES
const carrito= document.querySelector('#carrito');
const contenedorCarrito= document.querySelector('#lista-carrito tbody');
const listaCursos=document.querySelector('#lista-cursos');
const vaciarCarritoBtn=document.querySelector('#vaciar-carrito')

//1 CREO LAS FUNCIONES PARA  HACER LOS EVENT LISTENER

cargarEventListeners();
//CUANDO PRESIONAR PARA AGREGAR AL CARRITO
function cargarEventListeners(){
    listaCursos.addEventListener('click' , agregarCurso);
}

//FUNCIONES
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        console.log(e.target);
    }
   
}

//HAY QUE HACER TRAVERSING, LEE LA INOF QUE LE DIMOS CLICK Y EXTRAE EL CONTENIDO

