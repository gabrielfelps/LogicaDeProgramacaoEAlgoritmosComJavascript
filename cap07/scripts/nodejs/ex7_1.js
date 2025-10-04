const prompt = require("prompt-sync")();

// Elaborar um programa que leia uma fórmula matemática e analise se os parênteses utilizados na fórmula estão corretos. A análise deve considera dois fatores: o número de '(' deve ser igual ao número de ')' e, ao ler a fórmula de esquerda para a direita, em nenhum momento, o número de ')' pode ser maior que o número de '(', ou seja, não pode fechar um parêntese sem antes ter aberto.

const formulaMatematica = prompt("Digite uma formula matemática: ");
let contador = 0;
let erroEncontrado = false;

for (let i = 0; i < formulaMatematica.length; i++) {
  if (formulaMatematica.charAt(i) === "(") {
    contador++;
  } else if (formulaMatematica.charAt(i) === ")") {
    contador--;
  }

  if (contador < 0) {
    erroEncontrado = true;
    break;
  }
}

if (contador === 0 && !erroEncontrado) {
  console.log("Os parêntesis estão corretos.");
} else {
  console.log("Os parêntesis NÃO estão corretos.");
}
