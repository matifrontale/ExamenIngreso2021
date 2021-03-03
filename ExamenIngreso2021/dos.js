function mostrar()
{let cursada;
  let cantidadMaterias;
  let sexo;
  let notaPromedio;
  let edad;
  let seguir = "s";
  let promedioMax;
  let nombrePromedio;
  let nombre;
  let nombreLibre;
  let edadMin;
  let acumpromM = 0;
  let acumpromF = 0;
  let acumpromN = 0;
  let promM;
  let promF;
  let promN;
  let alumM;
  let alumF;
  let alumN;
  let totalMaterias;
  let materiasMax;
  let nombremat;
  let edadmat;
  
  do{
    nombre = prompt("Ingrese su nombre:");
  
    cursada = prompt("Ingrese tipo de cursada('libre', 'presencial', 'remota'):");
  
    cantidadMaterias = prompt("Ingrese cantidad de materias(mas de 0, menos de 8):");
  
    sexo = prompt("Ingrese sexo (femenino(f)/masculino(m)/no binario(n)):").toLowerCase();
    while(sexo != "m" && sexo != "f" && sexo != "n"){
      sexo = prompt("Dato inválido.Ingrese sexo (femenino(f)/masculino(m)/no binario(n)):");
    }
  
   notaPromedio = parseInt(prompt("Ingrese la nota promedio(entre 0 y 10):"));
    while(!(notaPromedio>=0 && notaPromedio<=10)){
      notaPromedio = parseInt(prompt("Dato inválido. Ingrese la nota promedio(entre 0 y 10):"));
    }
  
    edad = parseInt(prompt("Ingrese la edad:"));
    while( edad>= 0 && isNaN(edad)){
      edad = parseInt(prompt("Dato inválido. Ingrese edad."))
    }
  
    if(sexo != "m"){
      if(prom>promedioMax){
        promedioMax = prom;
        nombrePromedio = nombre;
      }
  
    }  
    if(cursada == "libre"){
      if(edad<edadMin){
        edadMin = edad;
        nombreLibre = nombre;
      }
  
    }
  
    promM = acumpromM / alumM;
    promF = acumpromF / alumF;
    promN = acumpromN / alumN;
  


    if(sexo == "m"){
      acumpromM += notaPromedio;
      alumM++;
    }else if(sexo == "f"){
      acumpromF += notaPromedio;
      alumF++;
    }else{
      acumpromN += notaPromedio
      alumN++;
    }
  
    if(cursada != "remota"){
      totalMaterias + cantidadMaterias;
      if(totalMaterias>materiasMax){
        materiasMax = totalMaterias;
        nombremat = nombre;
        edadmat = edad;
  
      }
  
  
    }
    
  
    seguir = prompt("Desea seguir ingresando productos?  s/n");
  
  }while( seguir == "s")
  
  console.log("El nombre del mejor promedio no masculino es:" + nombrePromedio +"<br>")
  console.log("El nombre del más joven de los alumnos que la dan libre es:" + nombreLibre +"<br>")
  console.log("El promedio de nota por sexo es: masculino:" + promM + "femenino:" + promF + "no binario:" + promN +"<br>" )
  console.log("La edad y el nombre del que curse más materias de forma no remota es:" + nombremat + "y tiene" + edadmat + "años." + "<br>")
  
  }


