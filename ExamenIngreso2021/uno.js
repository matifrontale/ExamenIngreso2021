function mostrar() {
  let tipo;
  let precio;
  let cantidad;
  let tipoInflamable;
  let marca;
  let acumuladorAlcohol =0;
  let promedioAlcohol;
  let acumuladorIac=0;
  let promedioIac;
  let acumuladorQuat =0;
  let promedioQuat;
  let contadorAlcohol=0;  
  let contadorIac=0;
  let contadorQuat=0;
 
let acumuladorIgnifugo=0;
let acumuladorCombustible=0;
let acumuladorExplosivo=0;
let contadorIAC200=0; //C
let flag=1;
   
for (let i = 0; i < 5; i++){
    tipo = prompt('Ingrese tipo: "alcohol" , "iac" o "quat"');
    while (!(tipo == "alcohol" || tipo == "iac" || tipo == "quat")) {
      tipo = prompt('ERROR, Ingrese tipo: "alcohol" , "iac" o "quat"');
    }

    precio = parseFloat(prompt("Ingrese precio entre 100 y 300: "));
    while (precio < 100 || precio > 300 || isNaN(precio)) {
      precio = parseFloat(prompt("ERROR, Ingrese precio entre 100 y 300: "));
    }

    cantidad = parseInt(prompt("Ingrese cantidad no mayor a 1000 unidades"));
    while (!(cantidad > 0 && cantidad <= 1000)) {
      cantidad = parseInt(
        prompt("ERROR. Ingrese cantidad no mayor a 1000 unidades")
      );
    }
    tipoInflamable = prompt(
      'Ingrese tipo inflamable: "ignifugo" , "combustible" o "explosivo"'
    );
    while (
      !(tipo == "ignifugo" || tipo == "combustible" || tipo == "explosivo")
    ) {
      tipo = prompt(
        'ERROR, Ingrese tipo: "ignifugo" , "combustible" o "explosivo"'
      );
    }
    marca = prompt("Ingrese marca");

    switch (tipo) {
      case "alcohol":
        contadorAlcohol++;
		acumuladorAlcohol+=cantidad;
        break;

      case "iac":
        contadorIac++; 
		acumuladorIac+=cantidad;

        break;

      case "quat":
		  acumuladorQuat+=cantidad;
        contadorQuat++;
        break;
    }



	switch (tipoInflamable) {
		case "ignifugo":
		 acumuladorIgnifugo+=cantidad;

		  break;
  
		case "combustible":
		 acumuladorCombustible+=cantidad;
  
		  break;
  
		case "explosivo":
		  acumuladorExplosivo+=cantidad;
		  break;
	  }

	  if (flag || precio > maxPrecio) {
		  maxPrecio = precio; 
		  maxMarca = marca; 
		  maxTipo = tipo;
		  flag = 0;}
		  
		} 




  if (acumuladorIgnifugo > acumuladorCombustible && acumuladorIgnifugo > acumuladorExplosivo) {
    maxUnidadesTipoInflamable = "Ignifugo";
  } else if (
    acumuladorCombustible >= acumuladorIgnifugo &&                                       
    acumuladorCombustible> acumuladorExplosivo            // B
  ) {
    maxUnidadesTipoInflamable = "Combustible";
  } else {
    maxUnidadesTipoInflamable = "Explosivo";}


	if (tipo =="iac" && precio <= 200 ){
		contadorIAC200++;
	}
  
  promedioAlcohol = acumuladorAlcohol / contadorAlcohol;
  promedioIac = acumuladorIac / contadorIac;
  promedioQuat = acumuladorQuat / contadorQuat;   // A
  

console.log("a) Promedio de los alcoholes:  " + promedioAlcohol);
console.log("a) Promedio de Iac:  " + promedioIac);
 console.log("a) Promedio de Quat:  " + promedioQuat);  
 console.log("b: Tipo inflamable con mas cantidad de unidades " + maxUnidadesTipoInflamable);
 console.log("c- Unidades IAC menores a 200: " + contadorIAC200);
 console.log("d- El producto mas caro es: " + maxTipo + "Su marca: " + maxMarca + " Y el precio: " + maxPrecio);


  
}
 