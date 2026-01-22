
const prompt = require("prompt-sync")({ sigint: true });

let numero = prompt("Ingresá un número: ");
numero = parseFloat(numero);

let doble = numero * 2;

console.log("El doble del número es:", doble);