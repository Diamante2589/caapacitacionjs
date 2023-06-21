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
  // console.log(curso);

    //CREA UN CONTENIDO CON EL CONTENIDO DEL CURSO ACTUAL

    const infoCurso={
        imagen: curso.querySelector('img').src,
        titulo:curso.querySelector('h4').textContent,
        precio:curso.querySelector('span.u-pull-right').textContent,
        //cada curso tiene un id, asi accedemos a esos atributos
        id:curso.querySelector('a').getAttribute('data-id'),
        cantidad : 1
    }

    //actualizar las cantidades paso (6)
    //revisa si un elemento ya existe  
    // (some)permite sobre un arreglo de objetos y verificar si elemento existe o no
    const existe=articulosCarrito.some(curso => curso.id===infoCurso.id)
        //console.log(existe);
    if(existe){
        //actualizamos la cantidad
        const cursos=articulosCarrito.map(curso=>{//iteramos con este map, va a llegar el momento, en que vamos a encontrar
            //el duplicado(if(curso.id etc))y lo unico que hacemos es incrementar el valor en uno, y lo retornamos
            if(curso.id=== infoCurso.id){
                curso.cantidad++
                return curso;//retorna el objeto actualizado
            }else{
                return curso;//retorna los objetos que no son lo duplicados
            }
        });
        articulosCarrito=[...cursos];
        
    }else{
        articulosCarrito=[...articulosCarrito,infoCurso] ;
        //agregamos el curso al carrito
    }

//hasta aca es el video 6
// una vez que  selleciono un curos leo  sus  datos  , voy a llenar el arreglo con esos objetos (let articulosCarrito)
//agrega elementos al arreglo de carrito
 // los (...)spreadoperator es para hacer copia
        
        console.log(articulosCarrito);
        carritoHTML();
       

 }
        

        function carritoHTML(){
            //limpiar el carrito

            limpiarHTML()//con esta istruccion primero limpiamos, para seguir añadiendo
            //recorre el carrito y genera el html
            articulosCarrito.forEach( curso => {
                const{imagen, precio, titulo, cantidad, id}=curso;//reemplaza el colocar curso.imagen etc(5)destruction
                console.log(curso);
                const row=document.createElement('tr')
                //vamos a utilizar un html
                // con el td imagen se inyecta la imagen
                row.innerHTML=`
               
                <td>
                    <img src= "${imagen}" width= "100">
                </td>
                <td>${titulo}</td>
                <td>${precio}</td>
                <td>${cantidad}</td>
                <td><a href="#" class="borrar-curso" data-id=" ${id}"> X <td>
                `;//estamos creando  el html, pero no lo hemos agregado a que se muestre, si recuerdas creamos un contenedor carrito y este contiene 
                //tbody

                //el td imagen se agrega con 120 mostrando el resto de la info
                
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

