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
        let edad=prompt("introduce tu edad");
        let valor=prompt("introduce el valor ahorrado");

        if (edad >=21  && valor>=150){
            document.write("la persona es mayor de edad   <br>");
            document.write("puedes obtener tu carnet  tiene el dinero para el carnet<br>");
        }

        else{

            document.write("el candidato no tiene la edad <br>");

            let edadCandidato=18-edad;
           
            document.write("vuelve dentro de " + edadCandidato +  "años");
        } 
        
        
           document.write("aun tienes edad <br>");
            document.write("<br><br>");
            document.write("acabamos de evaluar la edad del candidato");

    
   


     