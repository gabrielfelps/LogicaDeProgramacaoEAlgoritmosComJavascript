const prompt = require("prompt-sync")();

/* Digamos que o número de chinchilas de uma fazenda triplica a cada ano, após o primeiro ano. Elaborar um programa que leia o número inicial de chinchilas e anos e informe ano a ano o número médio previsto de chinchilas da fazenda. O número inicial de chinchilas deve ser maior ou igual a 2 (um casal). */

let numeroDeChinchilas;

do {
  numeroDeChinchilas = Number(prompt("N° Chinchilas: "));

  if (isNaN(numeroDeChinchilas) || numeroDeChinchilas <= 1) {
    console.log("Digite um valor válido de Chinchilas. (Pelo menos um casal)");
  }
} while (isNaN(numeroDeChinchilas) || numeroDeChinchilas <= 1);

let numeroDeAnos;

do {
  numeroDeAnos = Number(prompt("N° Anos: "));

  if (isNaN(numeroDeAnos) || numeroDeAnos <= 0) {
    console.log("Digite um valor válido de Chinchilas. (Pelo menos um casal)");
  }
} while (isNaN(numeroDeAnos) || numeroDeAnos <= 0);

let buffer;
for (let i = 1; i <= numeroDeAnos; i++) {
  if (i != 1) {
    buffer *= 3;
  } else {
    buffer = numeroDeChinchilas;
  }
  console.log(`${i}° Ano: ${buffer} Chinchilas`);
}
