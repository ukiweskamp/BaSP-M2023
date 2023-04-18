// ******** 6 - Functions ********
console.log('--EXERCISE 6: FUNCTIONS');

/* Exercise-6a: Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la funicón y
guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */
console.log('-Exercise 6.a');

function functionA(num1, num2){
    return num1 + num2;
}
var resultado = functionA(1,2);

console.log(resultado);

/* Exercise-6b: A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un
número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado. */
console.log('-Exercise 6.b');

function functionA(num1, num2){
    if (isNaN(num1) || isNaN(num2)){
        alert ('Uno de los parámetros tiene error')
        return NaN;
    } else {
        return num1 + num2
    }
} 
var resultado = functionA(1,'A');
console.log(resultado);


/* Exercise-6c: Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un
número entero. */
console.log('-Exercise 6.c');

function validateInteger(num){
    return Number.isInteger(num);
}

var num = 5;
var resultado = validateInteger(num);

console.log(resultado);


/* Exercise-6d: A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En
caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado). */
console.log('-Exercise 6.d');

function functionA(num1, num2){
    if (isNaN(num1) || isNaN(num2)){
        alert ('Error. One of these parameters is not a number.')
        return 'NaN';
    } else if(!Number.isInteger(num1)){
        alert(num1 + ' Must be an integer number, you must round it to' + Math.round(num1))
        return Math.round(num1);
    } else if(!Number.isInteger(num2)){
        alert(num2 + ' Must be an integer number, you must round it to' + Math.round(num2))
        return Math.round(num2);
    }
        return num1 + num2;
    }
    console.log(functionA(1.25, 3));

    /* Exercise-6e: Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma
probando que todo siga funcionando igual. */
console.log('-Exercise 6.e');

function functionB(num1, num2) {
    if(!Number.isInteger(num1)) {
        alert(num1 + ' Must be an integer number, you must round it to' + Math.round(num1));
        return Math.round(num1);
    } else if(!Number.isInteger(num2)) {
        alert(num2 + ' Must be an integer number, you must round it to' + Math.round(num2));
        return Math.round(num2);
    }
}

function functionA(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        alert('Error. One of these parameters is not a number.');
        return 'NaN';
    } else {
        functionB(num1, num2);
    }
    return num1 + num2;
}
console.log(functionA(1.25, 3));