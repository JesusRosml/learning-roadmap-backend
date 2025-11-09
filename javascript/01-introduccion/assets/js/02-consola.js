/*
    Debemos saber que JavaScript es un lenguaje interpretado, es decir,
    cuando ejecutamos el interpete va ejecutando linea por linea hasta
    finalizar el programa, claro, despues llegaremos a mas complejidad
    como por ejmeplos los callbacks, promesas, etc.

    Nota: Es importante priorizare el uso de variables constantes ya que
    son mas ligeras que las variables var y let, esto se debe a que las
    constantes no tienen propiedades setters que son para establecer un
    nuevo valor.

    Cuando una variable es una constante se debe usar camelCase aun que en otros
    lenguajes se maneje todo en mayúsculas, debemos colocar todo en mayuscula
    cuando sean variables de entorno
*/

const nameDev = 'Jesús Meshee';
const lenguage = 'JavaScript';
const age = 24;
const level = 'Jr Developer.'

// Imprime un mensaje en consola sin ningún tipo de formato
console.log( nameDev );
// Imprime un mensaje en consola en formato de alerta
console.warn( nameDev );
// Imprime un mensaje en consola en formato de error
console.error( nameDev );
// Imprime un mensaje en consola en formato de información
console.info( nameDev );

/*
    Una forma de poder identificar de manera sencilla de que variable proviene el valor
    que estamos imprimiendo es haciendolo de esta manera
*/

console.log( { nameDev } );

// De esta manera podemos colocarle estilos personalizados a nuestros logs

console.log( '%c Mis variables: ', 'color: blue; font-size: 3em;' );

// Log en forma de tabla, esto sirve para ver informacion relevante de mejor manera
console.table({ nameDev, lenguage, age, level });