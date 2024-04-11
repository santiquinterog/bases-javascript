/* Variable constante */
const nameStudent = "¡Hola UPB!"
/* No se puede cambiar el valor de una constante */
/* nameStudent = "¡Hola Diplomado!" */

/* Diferencia entre var y let */
if (true) {
  let blockScope = "Sí existe let"
  var globalScope = "Sí existe var"
}

console.log("variable var: ", globalScope);
/* No se puede acceder a la variable let porque su scope es de bloque */
/* console.log("variable let: ", blockScope); */

/* Tipos de datos */
let nulo = null;
let indefinida = undefined;
let int = 25;
let float = 25.4;
let boolean = true;
let string = "UPB";
let objeto = {
  nombre: "Super boy",
  edad: 3
}
let array = [null, undefined, 25, 25.4, true, "UPB", {nombre: "Super boy", edad: 3}] 
console.log("Nulo: ", nulo);
console.log("Tipo de Nulo: ", typeof(nulo));
console.log("Indefinidad: ", indefinida);
console.log("Tipo de Indefinidad: ", typeof(indefinida));
console.log("Entero: ", int);
console.log("Tipo de Entero: ", typeof(int));
console.log("Float: ", float);
console.log("Tipo de Float: ", typeof(float));
console.log("Booleano: ", boolean);
console.log("Tipo de Booleano: ", typeof(boolean));
console.log("String: ", string);
console.log("Tipo de String: ", typeof(string));
console.log("Array: ", array);
console.log("Tipo de Array: ", typeof(array));
console.log("Posición 0 del Array: ", array[0]);
console.log("Objeto: ", objeto);
console.log("Objeto: ", typeof((objeto)));
console.log("Propiedad del Objeto: ", objeto.nombre);

/* Cambiando tipo de un dato entero a string */
int = "25"
console.log("Entero: ", int);
console.log("Tipo de Entero: ", typeof(int));