
const prompt = require("prompt-sync")({ sigint: true });

let numero = prompt("Ingresá un número entero: ");
numero = parseInt(numero);

if (numero % 2 === 0) {
  console.log("El número es par");
} else {
  console.log("El número es impar");
}
