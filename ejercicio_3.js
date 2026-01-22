
const prompt = require("prompt-sync")({ sigint: true });

let num1 = prompt("Ingresá el primer número: ");
let num2 = prompt("Ingresá el segundo número: ");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

let suma = num1 + num2;

console.log("La suma de los dos números es:", suma);