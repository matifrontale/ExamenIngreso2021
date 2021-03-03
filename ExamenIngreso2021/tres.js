function mostrar(){

	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let flag = 1; //a
let contadorPersonasViudas60=0
let precioPasajero=600
let ViajeSinDescuento
let edadMinima
let nombreMinimo;
	let respuesta;
  
	do {
	  nombre = prompt("Ingrese nombre: ").toLowerCase();
  
	  edad = parseInt(prompt("Ingrese edad: "));
	  while (isNaN(edad) || edad <= 0) {
		edad = parseInt(prompt("ERROR. Ingrese edad: "));
	  }
	  sexo = prompt("Ingrese sexo:  (f/m) ").toLowerCase();
	  while (!(sexo == "f" || sexo == "m")) {
		sexo = prompt("ERROR. Ingrese sexo:  f/m ").toLowerCase();
	  }
	  estadoCivil = prompt('Ingrese estado civil:  ("soltero", "casado" o "viudo")'
	  ).toLowerCase();
	  while (!(estadoCivil == "soltero" || estadoCivil == "casado" || estadoCivil == "viudo" )) 
	  {
		estadoCivil = prompt(
		  'ERROR. Ingrese estado civil:  ("soltero", "casado" o "viudo")'
		).toLowerCase();
	  }
	  temperatura = parseInt(prompt("Ingrese temperatura corporal: "));
	  while (isNaN(temperatura) || temperatura <= 0) {
		temperatura = parseInt(prompt("ERROR. Ingrese temperatura corporal: "));
	  }
  

if (estadoCivil == "viudo" && edad > 60){
	contadorPersonasViudas60++;  
}  //a 

ViajeSinDescuento = precioPasajero * cantidad //c

if (flag || edad < edadMinima) {
	edadMinima = edad;  
	nombreMinimo = nombre; 
		flag = 0;}
	
  	 
	  respuesta = prompt(" Quiere agregar otro pasajero?:  ");
	} while (respuesta == "si");
  
	console.log("a) La cantidad de personas con estado 'viudo' de mas de 60 años: " + contadorPersonasViudas60);
	console.log("el nombre y edad de la mujer soltera mas joven: " + edadMinima + "Y el nombre es: " + nombreMinimo + "<br>"); 
	console.log("c) Precio viaje total sin descuento:" + ViajeSinDescuento + "<br>" );
	


	}
  

  
  