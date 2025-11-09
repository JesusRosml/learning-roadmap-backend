/*
    Uno de los problemas mas graves de usar var es el hoisting, digamos que el hoisting eleva
    la variable hasta el inicio del archivo cuando en realidad no es así, como se puede
    observar en el ejempo la variable "nameComplete" ni siquiera existe en este punto,
    normalmente esperariamos un error pero de manera extraña imprime undefined en vez
    de disparar el error, esto nos hace llegar a la conclusión de que las variables
    var son creadas al inicio del archivo pero no son inicializadas.

    Esto sucede con variables creadas con var o let ya que disparan un error.
*/

console.log( nameComplete );

/*
    Uno de los principales problemas de declarar una varibales utilizando la palabra reservada
    var, es que puede modificar propiedades el objeto global "window", incluso pude modificar
    métodos existentes que pertenecen al objeto global window.
*/
alert( 'Aun no hemos modificado la funcion alert' )

var username = 'Jesús Meshee';

var alert = 'papa frita';

console.log( alert );

try {
    alert( 'Hemosn modificado el metodo del objeto global windows' );
} catch( error ) {
    console.log( 'Alert ya no es una función ya que modificamos el método original usar var.' );
}

/*
    Ejemplo de una propiedad siendo modificada de manera no intencionada por utilizar var,
    esto evidentemente es un problema muy grabe ya que nos puede causar error dificiles de
    rastrear.

    Esto no pasaría utilizando let o const ya que estos solo existen en el scoope permitido
    y no modifican al objeto global window.
*/

var outerHeight = 5000000000;
var outerWidth = 1;

var nameComplete = 'Jess Meshee is a Full-Stack Developer';

console.warn( nameComplete );