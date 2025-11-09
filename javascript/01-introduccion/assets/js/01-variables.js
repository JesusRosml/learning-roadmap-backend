/*
    Una variables no es mas que un contenedor que puede almacenar distintos
    tipos de datos, con datos también hacemos referencia a que almacena información,
    como por ejemplo almacenar números, textos, arreglos e incluso objetos, pero
    no solo almacena, tambien nos ofrece la posibilidad de cambiar la información.

    Las variables apuntan a un lugar en memoria, es decir, pueden guardar información
    de manera temporal y consumen recursos del dispositivo.
*/

/*
    Ejemplo de las 3 formas de declarar variables, antes de seguir con el curso,
    es importante que les explique que significa la palabra "declarar", la
    palabra declarar no es mas que CREAR variables mas sin embargo no le estamos asignando
    un valor, es importante saber esto.
*/

// En esta linea de codigo solo estamos creando la variable (declarando)
let userName;

/*
    Esta forma de declarar variables es mala practica, no se debe usar var, esto se debe
    a que esta fue la segunda forma de crear variables en JavScript, esto fue implementado
    hace muchos años, pero tiene muchos problemas que beneficios por eso es que no es recomendado
    de usar y se preguntaran ¿Por que no fue eliminado de JavaScript? Es importante
    tener en cuenta que JavaScript busca ser un lenguaje compatible con navegadores
    que son viejos, por ende no elimina caracteristicas que actualmente dan problemas ya que
    romperia muchos sistemas viejos.
*/
var userAge; 

/*
    Esta tercera forma es obligatorio declararlo e iniciarlizarlo, esto se debe
    a que es una constante, es decir, su valor al que apunta no puede cambiar.
*/
const birthday = 'August 11, 2001';

/*
    Tambien podemos declarar e inicializar una variable de esta manera,
    como pueden notar no contiene ninguna de las palabras reservadas para
    indicar que queremos crear una variable por primera vez, esto es posible
    pero se considera muy mala practica, no es recomendado hacerlo de esta manera.
*/

isBadPractice = true;

console.log({ isBadPractice });

/*
    Es importante saber sobre las versiones de JavaScript, anteriormente se lanzaban
    actualizaciones de JavaScript cada 6 años, pero esto hacía que fuera mas dificil
    de aprender las nuevas caracteristicas ya que eran bastantes asi que decidieron
    lanzar versiones cada año, esto posiblemente les lleve a la siguiente pregunta
    ¿Que version de Ecmascript debo de utilizar? Sobre esta pregunta hoy den dia
    no hay de que preocuparnos ya que existen herramientas que nos permiten usar 
    caracteristicas modernos de JavaScript y que sea compatible con la gran mayoria
    de navegadores viejos, a esto se le denomina POLYFILL, es decir, esto nos permite 
    usar caracteristicas de ES6 en ES5, aun que en versiones mas viejas no sea tan compatible
    ahi si tendriamos la tarea de investigar cual version de JS usar.
*/

/*
    Formas de crear muchas variables sin la necesidad de ponerle una palabra reservada
    a cada una.
*/

let a = 10, b = 20, c = a + b;
let d = 10,
    e = 20;
    f = e + b;