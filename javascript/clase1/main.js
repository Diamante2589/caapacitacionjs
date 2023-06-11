/*let edad=20;

    if (edad >=21){
        document.write("la persona es mayor de edad  <br>")
        document.write("puedes obtener tu carnet");
    }

    else document.write("aun no tienes edad");
        document.write("<br><br>");
        document.write("acabamos de evaluar la edad del candidato");

        condicional if
   */
/*else if*/
/*
        let edad=prompt("introduce tu edad");
        let valor=prompt("introduce el valor ahorrado");

        if (edad >=21  && valor>=150){
            document.write("la persona es mayor de edad   <br>");
            document.write("puedes obtener tu carnet  tiene el dinero para el carnet<br>");
        }

        else {

            document.write("el candidato no tiene la edad <br>");
            let edadCandidato=18-edad;
           
            document.write("vuelve dentro de " + edadCandidato +  "años");
        } 
        
        
           document.write("aun tienes edad <br>");
            document.write("<br><br>");
            document.write("acabamos de evaluar la edad del candidato");

    */
   
//ejercicio de switch
/*
    const weather=parseInt(prompt("ingrese codigo del 1 al 5 para informarle el clima"));


        switch(weather){
            case(1):
                console.log(`El dia es soleado`);
                break;
            case(2):
                console.log(`Parcialmente nublado`);
                break;
            case(3):
                console.log(`Mayormente nublado`); 
                break;
            case(4):
                console.log(`Lluvioso`);
                break;
            case(5):
                console.log(`Nieve`); 
                break;
            case(6):
                console.log(`Tormenta`);  
                break;                     

            }



            console.log(`Se termino el pronostico`);

        */

      //bucle while 01
       //no sirve declarar la variable como constante, es necesario hacerlo como let
       /*
       let number=1;

        while(number<10){
            document.write(`imprimiendo en forma No ${number} <br>`);
            document.write(`__________${number}___________________<br>`);
            number++;
        }
        */
        /*
        let number=prompt("introduce un numero");

        while(number<0){
            number=prompt(`introduce un NUMERO POSITIVO`);
        }
    
            document.write(Math.sqrt(number));
            */
/*
         //dowhile

         let number;
         // se declara la variable y reserva el espacio

         do{
           
            number=prompt(`introduce un NUMERO POSITIVO`);

         }while(number<0)
            
                document.write(Math.sqrt(number));
         
         */

        //exercise 
        
        
        //programa aleatorio con while
         /*
         let number= prompt(`introduce un numero entre 1 y 100`);
         let numberRandom= parseInt(Math.random()*100);
         let intentos=0;

         while (numberRandom != number){
            
            intentos++;

             if(number < numberRandom)
                alert(`Ingresa un numero mas alto`);

             if(number > numberRandom)
                alert(`Ingresa un numero mas  bajo `) ;  

              number=prompt("Vuelve a ingresar otro numero") ; 
         }

         document.write(`Has encontrado el numero en ${intentos} intentos`);
*/
         //bucle for
/*
         for(let contador=0; contador<10;contador++){
            document.write(`numero: ${contador} <br>`);
            document.write(`_____________________<br>`);
         }

         document.write(`Ha terminado el bucle `);

*/

        //exercise con dos variables;
        /*
        for(let x=1, y=2; x<10; x++,y++){
            document.write(`${x} es menor que ${y} <br>`);
            document.write(`____________________________<br>`);

        }
*/
/*
        let number1=prompt(`introduce el inicio del bloque`);
        let number3=prompt(`introduce el final del bucle`);
        

        for(let x=number1 ;x < number3;x++){
            document.write(`el numero es:${x}<br>`);
        }

         */
        
        //FACTORIAL
/*
        let number1=prompt("ingresar un numero de 1 al 20");
        let resultado;
        


        for(resultado=number1;number1>1; number1--){
            
           resultado=resultado*(number1-1);
           document.write(`El resultado es ${resultado} <br>`);
        }

*/

        //excercise entero
/*
        let number=parseInt(prompt("ingrese un numero"));
        let resultado=0;

        for(let x=0; x < number; x++){
            resultado=x;
            document.write(`${resultado},`);
        }

        document.write(`se termino`);

        */

        /*
        exercise modulo
        let number=prompt(`ingrese un numero`);
        let resultado;

        for(let x=0; x<number;x++){
            if(x % 2==0){
                resultado=x;
                alert(`${resultado} \n`);
            }
        }

        document.write(`finish the exercise`);
*/
        //tabla de multiplicar
/*
        let number=parseInt(prompt(`ingrese un numero`));
        let resultado;

        for(let x=0; x<=10;x++){
            resultado=(number * x);
            document.write(`${number} X ${x} = ${resultado} <br>`);

        }
            document.write(`finish the exercise`);
*/
    
//multiplo

 
        //lettter repeat 
/*
        let number=prompt(`ingrese un numero`);
        let letter=prompt(`ingrese una letra`);
      

        for(let x=0; x<number;x++){
                
                document.write(`${letter} <br>`);
            }

            document.write(`Termino la operacion`);

          */  
        //conteo reloj
/*
        let izq, der;
                for(izq = 0; izq < 2; izq++){
                    //cuando hay un for anidado el for de  afuera se cumple cuando se cumpla el for que esta adentro,
                    //en este ejemplo imprime el 0 y espera hasta que el for que esta adentro se deje de cumplir
                    for(der=0; der < 5; der++){
                     //imprime 0,1,2,3 hasta 4 y cuando ello pasa , se pasa al for y vuelve y empieza de nuevo   

                console.log(izq+" : "+der)
                }
            }

*/

            //imprimir traiangulo
            /*
            let alto, ancho,  linea, cadena;
                alto = parseInt(prompt("Teclea un número de 1 a 10"));
                for ( linea = 0; linea < alto; linea++){
                    cadena=''
                    for(ancho = 0; ancho <= linea; ancho++){
                        cadena += "*";
                        }
                    console.log( cadena+ "\n");
}
*/
            //suma de numeros
/*
            let number=parseInt(prompt(`ingrese un numero entero de 0 a 10`));
            let resultado=0;
            let x;

             for(x=0; x <=number; x++){
               
                 
                 resultado += x;
             }


             document.write(`los numeros enteros de 0 a ${number} suman ${resultado}<br>`)

*/
/*

                    let max, suma, ctrl;
                    max = parseInt(prompt("teclea un entero positivo"));
                    suma = 0;
                    for (ctrl = 0; ctrl <= max; ctrl++)
                    {
                        suma += ctrl;
                    }
                    alert("Los  números enteos de 0 a "+max+" suman "+suma);

*/

//  media aritmetica
/*
                let x;
                let number1=parseInt(prompt(`ingrese el primer numero`));
                let number2=parseInt(prompt(`ingrese el segundo numero`));
                let number3=parseInt(prompt(`ingrese el tercer numero`));
                let number4=parseInt(prompt(`ingrese el cuarto numero`));
                let resultado;


                for(x=0; x<=4; x++){
                    resultado=(number1+number2+number3+number4)/4
                    

                }

                document.write(`La media aritmetica de ${number1}, ${number2}, ${number3}, ${number4} es ${resultado}`)
*/

//   Arreglos

            
                    







        

       