const prompt = require("prompt-sync")();
/* Elaborar um programa que leia três lados e verifique se eles podem ou não formar um triângulo. Para formar um triângulo, um dos lados não pode ser maior que a soma dos outros dois. Caso possam formar um triângulo, exiba também qual o tipo de triângulo:

Equilátero: 3 lados iguais
Isósceles: 2 lados iguais
Escaleno: 3 lados diferentes */

const ladoA = Number(prompt("Lado A: "));
const ladoB = Number(prompt("Lado B: "));
const ladoC = Number(prompt("Lado C: "));

if (
  isNaN(ladoA) ||
  isNaN(ladoB) ||
  isNaN(ladoC) ||
  ladoA <= 0 ||
  ladoB <= 0 ||
  ladoC <= 0
) {
  console.log("Digite um valor válido e positivo.");
} else if (
  ladoA + ladoB > ladoC &&
  ladoA + ladoC > ladoB &&
  ladoB + ladoC > ladoA
) {
  if (ladoA === ladoB && ladoB === ladoC) {
    console.log("Tipo: Equilátero.");
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    console.log("Tipo: Isósceles.");
  } else {
    console.log("Tipo: Escaleno.");
  }
} else {
  console.log("Não é um triângulo.");
}
