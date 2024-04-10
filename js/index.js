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