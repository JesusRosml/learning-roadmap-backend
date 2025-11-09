/*
    Definición de tipo de datos de una variables

    Un tipo de dato de una variable describe el contenido del valor que tienen
    la variable.

    ¿Que son los primitivos?

    Es una información que no es un objeto y son inmutables.

    Es importante dejar en claro el concepto de la inmutabilidad, la inmutabilidad
    significa que algo no puede ser modificado despues de haber sido creado, no debemos
    confundir la inmutabilidad de un valor con una variable ya que la variable si puede
    ser modificada.

    Tipos de datos primitivos

    - Boolea - true / false
    - null - Sin valor en lo absoluto
    - undefined - Una variable declarada que aún no se le asigna un valor
    - Number - integers, floats, etc.
    - String - Una cadena de caracteres
    - Symbol - Es un valor único que no es igual a ningún otro valor.
*/

let nameDeveloper = 'Jesús Meshee';

console.log( nameDeveloper );

/*
    Las comillas sencillas son más ligeras que las comillas dobles, por esa
    razón se aconseja que se utilicen las comillas sencillas, aun que no es mucha
    diferencia, al final del día depende de las preferencias del desarrollador.
*/
nameDeveloper = 'Jess Rosml';

console.log( nameDeveloper );

// Otra manera de utilizar strings son las comillas dobles
nameDeveloper = "Jesús Pérez Hidalgo ";

console.log( nameDeveloper );

/*
    Esta tercera forma de utilizar strings son los backticks, esta forma
    tiene muchas mas funcionalidas y beneficios.
*/
nameDeveloper = `Jesús`;

console.log( nameDeveloper );

/*
    Esto se le conoce como un operador interno de JavaScript, sirve para
    indicar el tipo de dato que almacena una variable.
*/

console.log( typeof nameDeveloper );

let isDeveloper = true;

console.log( typeof isDeveloper );

/*
    Algo que debemos tener en cuenta es que en JavaScript el unico tipo numerico
    que existe es el entero, es decir, para JavaScript es lo mismo un entero que un
    flotante.
*/
let countExperienceDeveloper = 1;

console.log( typeof countExperienceDeveloper );

/*
    Inicialmente este valor tiene un valor de undefined ya que solo se ha
    declarado el método mas no se ha inicializado con un valor.
*/
let lenguageProgramming;

console.log( typeof lenguageProgramming );

let valueNull = null;

/*
    Esto devuelve object, es por eso algunos desarrolladores consideran null
    como un objeto, vale la pena mencionar que en JavaScript todo es un objeto
    menos los tipos de datos primitivos.
*/
console.log( typeof valueNull );

/*
    Los symbol permiten crear identificadores unicos, aun que aparentemente las siguientes
    dos variables almacenan exactamente el mismo valor 'a' para JavaScript estos
    son totalmente diferentes gracias a los symbol.
*/
let symbol1 = Symbol( 'a' );
let symbol2 = Symbol( 'a' );

// devuelve symbol
console.log( typeof symbol1 );

// Como podemos ver son falsos
console.log( symbol1 === symbol2 );