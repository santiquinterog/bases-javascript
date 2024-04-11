/* Variables */

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


/* Funciones */

/* Diferentes formas de declarar una función */

/* Forma 1: con la palabra reservada function */
function declaracionUno () {
  console.log("Forma 1 de declarar una función");
}

declaracionUno()

/* Forma 2: usando función flecha */
const declaracionDos = () => {
  console.log("Forma 2 de declarar una función");
}

declaracionDos()

/* Sin parámetros y con parámetros */

/* Sin parámetros */
const sinParametros = () => {
  console.log("Función sin parámetros");
}

sinParametros()

/* Recibiendo parámetros */
const conParametros = (esUna, queRecibe="parámetros") => {
  console.log(esUna + " que recibe " + queRecibe);
}
const parametros = "parámetros"
conParametros("Función", parametros)
conParametros("Función")

/* Función que retorna un valor */
const funcionSumaQueRetorna = (a, b) => {
  return a + b;
} 
const resultado = funcionSumaQueRetorna(1,2)
console.log(resultado);


/* Funciones anónimas */

/* Con la palabra function */
setTimeout(function() {
  console.log('¡Hola! Esto es después de 2 segundos.');
}, 2000);

/* Función anónima tipo flecha */
setTimeout(() => {
  console.log('¡Hola! Esto es después de 2 segundos.');
}, 2000);