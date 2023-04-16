// ******** 2 - Strings ********
console.log('--EXERCISE 2: STRINGS')

/* Exercise-2a: Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula
(utilizar toUpperCase). */
console.log('-Exercise 2.a')

var a = 'Hello world my name is Eugenio Weskamp';
var b = a.toUpperCase ();
console.log(b);

/* Exercise-2b: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros
5 caracteres guardando el resultado en una nueva variable (utilizar substring). */
console.log('-Exercise 2.b')


var a = 'My name is Eugenio Weskamp';
var b = a.substring (0, 5);
console.log(b);

/* Exercise-2c: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos
3 caracteres guardando el resultado en una nueva variable (utilizar substring). */
console.log('-Exercise 2.c')


var a = 'My name is Eugenio Weskamp';
var b = a.substring(a.length - 3);
console.log(b);

/* Exercise-2d: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera
letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring,
toUpperCase, toLowerCase y el operador +). */
console.log('-Exercise 2.d')


var a = 'my name is Eugenio Weskamp';
var b = a.substring(0, 1).toUpperCase() + a.substring(1).toLowerCase();
console.log(b);

/* Exercise-2e: Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la
posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */
console.log('-Exercise 2.e')

var a = 'my name is Eugenio Weskamp';
var b = a.indexOf(' ');
console.log(b);

/* Exercise-2f: Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre
medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de
ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
operador +).*/
console.log('-Exercise 2.f')

var a = 'especialiDAD electroENCEfalografista'
// Encontramos donde termina la primer palabra para iniciar la segunda con mayúscula
var index = a.indexOf(" ");
//console.log(index);
var b = a.substring(0,1).toUpperCase() + a.substring(1,13).toLowerCase() + a.substring(13,14).toUpperCase() + a.substring(14).toLowerCase()
console.log(b);