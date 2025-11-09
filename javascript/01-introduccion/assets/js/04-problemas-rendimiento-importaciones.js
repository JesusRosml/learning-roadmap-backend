/*
    El lugar en donde importamos nuestro archivo JS en nuestro HTML
    es muy importante ya que puede afectar el rendimiento o mejorarlo.

    El problema de colocar nuestro archivo en el Head de nuestro HTML,
    es que si tenemos codigo bloqueante o demasiado codigo, dara la impresion
    de que nuestra aplicación es lenta ya que no se mostrara el html hasta que
    el archivo de js se descargara completamente y se ejecutara.

    Si lo colocamos al final del body primero se terminara de cargar el HTML
    y luego el archivo de JS, lo que da la impresion de que nuestra aplicación se cargo
    rapidamente.
*/

alert( 'Dios siempre esta conmigo, por ende, debo estar feliz!!!' );