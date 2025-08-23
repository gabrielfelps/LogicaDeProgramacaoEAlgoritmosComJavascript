const prompt = require("prompt-sync")();

/* Elaborar um programa que leia o número e verifique se ele é ou não perfeito. Um número dito perfeito é aquele que é igual à soma dos seus divisores inteiros (exceto o próprio número). O programa deve exibir os divisores do número e a soma deles. */

/* Exemplo: 28
  Divisores do 28: 1, 2, 4, 7, 14 (Soma: 28)
*/

let numeroDigitado;
do {
  numeroDigitado = Number(prompt("Digite um número inteiro: "));

  if (isNaN(numeroDigitado) || numeroDigitado < 1) {
    console.log("Digite um número inteiro positivo válido.\n");
  }
} while (isNaN(numeroDigitado) || numeroDigitado < 1);

const numeros = [];
let soma = 0;
for (let i = 1; i < numeroDigitado; i++) {
  if (numeroDigitado % i == 0) {
    numeros.push(i);
    soma += i;
  }
}

console.log(
  `Divisores de ${numeroDigitado}: ${numeros.join(", ")} (Soma: ${soma})`
);

if (soma === numeroDigitado) {
  console.log(`${numeroDigitado} É um Número Perfeito.`);
} else {
  console.log(`${numeroDigitado} Não é um Número Perfeito.`);
}
