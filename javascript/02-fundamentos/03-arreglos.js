/*
    Los arreglos son un objeto muy parecido a una lista de información, que contiene
    un grupo de elementos, basicamente es un tipo de datos que permite guardar muchos
    valores en un mismo espacio en memoria.

    Usualmente, esa información dentro del arreglo es del mismo tipo de dato.
*/

/*
    Esta es una manera de crear arreglos aun que esta no es una manera común de
    hacerlo, el número que está dentro del arreglo indica cuantos espacios tendra
    por defecto.
*/
const lenguage = new Array( 10 );

console.log( lenguage );

/*
    De esta manera creamos un arreglos, es un estandar crear arreglos para un tipo de datos
    especifico, es decir, un arreglo para almacenar strings, otro para alamcenar numeros, etc
    aun que en JavaScript no es obligatorio. 
*/
const newLenguage = [ 'JavaScript', 'TypeScript' ];

console.log( newLenguage[0] );

/*
    Es considerado buena practica finalizar el ultimo elemento con una coma, tambien
    se puede realizar operaciones matemaricas detro del arreglo y devuelve el resultado
    de la operación.

    En los arreglos podemos almacenar literalmente cualquier cosa, en el ejemplo
    podemos ver que podemos almacernar los tipos de datos basicos y hasta incluso
    funciones y tambien objetos.
*/
const typeDataRandom = [
    true, 123, 'Jesus', 1 + 2, () => {}, function() {}, { a: 1, b: 2 },
    [ 'Jesus', 'Meliodas', 'Meshee' ],
];

console.log( typeDataRandom );

// De esta manera podemos acceder al arreglo que esta dentro del arreglo principal
console.log( typeDataRandom[7][2] )