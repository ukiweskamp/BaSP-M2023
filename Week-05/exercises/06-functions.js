// ******** 6 - Functions ********
console.log('--EXERCISE 6: FUNCTIONS');

/* Exercise-6a: Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la funicón y
guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */
console.log('-Exercise 6.a');

function functionA(num1, num2){
    return num1 + num2;
}

console.log(functionA(1,2));

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
console.log(functionA(1,'A'));


/* Exercise-6c: Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un
número entero. */
console.log('-Exercise 6.c');


