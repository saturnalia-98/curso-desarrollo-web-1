/* 
    Semana5: JS Basico
    Autor: Iran Rendon Montiel
    Fecha: 17/01/2023
*/

// Variable - String
var saludo = "Hola mundo";

if(saludo){
    var saludo = "Hola Puebla";
    console.log(saludo);
}

let nombre = "Victoria";
if(nombre){
    let nombre = "Pedro";
    console.log(nombre);
}

// Variable Number
let edad = 35;

// Variable Boleana
let Pato = true;
let falso = false;

// Variable Indefinido
let Gato = undefined;

// Variable Null
let nulo = null

// Interpolacion de texto
console.log (`Hola Saturno, mi nombre es ${nombre} y tengo ${edad} años de edad\n`);
console.log (`Magia, ahora los ${Pato} no son lo mismo que los ${Gato}\n`);

// Variables Number
let a = 4
let b = 6
let x = 2

console.log(`La suma de A y B es: ${a+b}\n`)

let sumaResultado = a+b

if(sumaResultado>x){
    console.log(`La suma de A+B = ${sumaResultado} es mayor que X = ${x}`)
}