//1-CREO LAS VARIABLKES
const carrito= document.querySelector('#carrito');
const contenedorCarrito= document.querySelector('#lista-carrito tbody');
const listaCursos=document.querySelector('#lista-cursos');
const vaciarCarritoBtn=document.querySelector('#vaciar-carrito')
// despues de infocurso, creo esta variable
let articulosCarrito=[];

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
        precio:curso.querySelector('span.u-pull-right').textContent,
        //cada curso tiene un id, asi accedemos a esos atributos
        id:curso.querySelector('a').getAttribute('data-id'),
        cantidad : 1
    }
// una vez que  selleciono un curos leo  sus  datos  , voy a llenar el arreglo con esos objetos (let articulosCarrito)
//agrega elementos al arreglo de carrito
 // los (...)spreadoperator es para hacer copia
        articulosCarrito=[...articulosCarrito,infoCurso] ;
        console.log(articulosCarrito);
        carritoHTML();
       

 }
        

        function carritoHTML(){
            //limpiar el carrito

            limpiarHTML()//con esta istruccion primero limpiamos, para seguir añadiendo
            //recorre el carrito y genera el html
            articulosCarrito.forEach( curso => {
                const row=document.createElement('tr')
                //vamos a utilizar un html
                row.innerHTML=`
                <td>
                    ${curso.titulo}
                </td>
                `;//estamos creando  el html, pero no lo hemos agregado a que se muestre, si recuerdas creamos un contenedor carrito y este contiene 
                //tbody
                
                //Agrega el HTML del carrito en el tbody
                contenedorCarrito.appendChild(row);//vamos a agregar cada row en cada iteracion
            })
        }
        //elimina los cursos del tbody

        function limpiarHTML(){
            //forma lenta de html
            //contenedorCarrito.innerHTML='';

            while(contenedorCarrito.firstChild){//mientras el contenedor carrito tiene por lo menos un elemento adentro
                //se sigue ejecutando y cuando este limpio ya no ejecuta
                contenedorCarrito.removeChild(contenedorCarrito.firstChild);
            }
        }

