// ******** 3 - Arrays ********
console.log('--EXERCISE 3: ARRAYS');

/* Exercise-3a: Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log). */
console.log('-Exercise 3.a');

var a = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(a[4], a[10]);

/* Exercise-3b: Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */
console.log('-Exercise 3.b');

console.log(a.sort());

/* Exercise-3c: Agregar un elemento al principio y al final del array (utilizar unshift y push). */
console.log('-Exercise 3.c');

a.unshift('Vacaciones');
a.push('Osvaldo');
console.log(a);

/* Exercise-3d: Quitar un elemento del principio y del final del array (utilizar shift y pop). */
console.log('-Exercise 3.d');

a.shift(0);
a.pop(12);
console.log(a);

/* Exercise-3e: Invertir el orden del array (utilizar reverse). */
console.log('-Exercise 3.e');

console.log(a.reverse());

/* Exercise-3f: Unir todos los elementos del array en un único string donde cada mes este separado por un guión -
(utilizar join). */
console.log('-Exercise 3.f');

console.log(a.join('-'));

/* Exercise-3g: Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */
console.log('-Exercise 3.g');

var aCopy = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(aCopy.slice(4, 11));