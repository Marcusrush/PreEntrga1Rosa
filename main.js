


let terminar = false;
while (terminar == false) {  //(!opcion) es igual.
  console.log("1-suma");
  console.log("2-resta");
  console.log("3-multiplicacion");
  console.log("4-division");
  console.log("5-tabla de x");

  console.log("0 salir")

  let opcion = parseInt(prompt("Ingrese numero de opcion desada"));
  if (opcion == 0) {
    terminar = true
  }

  let num1, num2, resultado;

  switch (opcion) {  //ESTO TAMBIÉN PODRÍA IMPLEMENTARSE CON IF...ELSE PERO USO SWITCH PORQUE SON VARIAS OPCIONES
    case 1:
      num1 = parseInt(prompt("Ingrese un numero"));
      num2 = parseInt(prompt("Ingrese otro numero"));
      resultado = num1 + num2;
      console.log("el resultado de la suma es: " + resultado);
      break;


    case 2:
      num1 = parseInt(prompt("Ingrese un numero"));
      num2 = parseInt(prompt("Ingrese otro numero"));
      resultado = num1 - num2;
      console.log("el resultado de la resta es: " + resultado);
      break;

    case 3:
      num1 = parseInt(prompt("Ingrese un numero"));
      num2 = parseInt(prompt("Ingrese otro numero"));
      resultado = num1 * num2;
      console.log("el resultado de la multiplicación es: " + resultado);
      break;

    case 4:
      num1 = parseInt(prompt("Ingrese un numero"));
      num2 = parseInt(prompt("Ingrese otro numero"));
      resultado = num1 / num2;
      console.log("el resultado de la división es: " + resultado);
      break;

    case 5:
      num1 = parseInt(prompt("Ingrese el numero para calcular la tabla"));
      for (let i = 1; i <= 10; i++) {
        console.log(i + "x" + num1 + "=" + (i * num1));
      }
      break;

    default:
      console.log("Opción no es válida");
      break;

      console.log("1-suma");
      console.log("2-resta");
      console.log("3-multiplicacion");
      console.log("4-division");
      console.log("5-tabla de x");
      console.log("0 salir")

      opcion = parseInt(prompt("Ingrese numero de opcion desada"));
      if (opcion == 0) {
        terminar = true
      }





  }

}

