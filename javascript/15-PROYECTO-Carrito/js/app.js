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
        const cursoSeleccionado=e.target.parentElement.parentElement;
        leerDatos(cursoSeleccionado);
    }
   
}

//HAY QUE HACER TRAVERSING, LEE LA INF QUE LE DIMOS CLICK Y EXTRAE LA INFORMACION DEL CURSO  C


function leerDatos(curso){
   console.log(curso);

    //CREA UN CONTENIDO CON EL CONTENIDO DEL CURSO ACTUAL

    const infoCurso={
        imagen: curso.querySelector('img').src,
        titulo:curso.querySelector('h4').textContent,
        precio:curso.querySelector('span.u-pull-right').textContent
        //cada curso tiene un id, asi accedemos a esos atributos
        
    }

        console.log(infoCurso);
}
