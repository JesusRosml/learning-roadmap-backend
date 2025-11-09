/*
    Esto sirve para mostrar una alerta con un mensaje al usuario, debemos tener
    en cuenta que esta función es bloqueante, es decir, el resto del código no
    se ejecutara hasta que el usuario le de ok a la alerta.
*/
const titleAlert = 'Muestra un mensaje en forma de alerta.';

alert( titleAlert );

/*
    La función que se muestra a continuación su unico objetivo es solictar información
    al usuario, es decir, le mostrará al usuario un input en el que el puede escribir.
    
    El primer argumento sirve para coloca una especie de etiqueta que se le mostrara
    al usuario, esta etiqueta sirve para describir que tipo de información se espera
    que el usuario coloque, el segundo argumento coloca un valor por defecto.

    Ambos valores son opcionales.

    El método prompt retorna el valor que el usuario escriba, por ende lo podemos
    asignar a una variables o lo podemos utilizar como cualquier otro valor.
*/

const titlePrompt = '¿Cual es tu edad?'
const valueDefaultPromp = 18;

const userAge = prompt( titlePrompt, valueDefaultPromp );
const messageUserAge = `El usuario tiene la edad de: ${ userAge }`;

console.log( messageUserAge );

/*
    Este método sirve como ventana de confirmación, es decir, realiza una pregunta
    antes de realizar una acción, retorna un valor booleano, si el usuario da cancelar
    pues devuelve false y si el usuario le da en aceptar devuelve un true.
*/
const isRemoved = confirm( '¿Estas seguro de borrar esto?' );

console.log( isRemoved );

/*
    Las funciones que acabamos de utilizar realmente pertenecen al objeto global
    windows y son bloqueantes.
*/