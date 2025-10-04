const prompt = require("prompt-sync")();

// Elaborar um programa que leia a altura de uma árvore (número de linhas) e após exiba a árvore iniciando com 2 estrelas (asteriscos) e aumentando em 2 a cada linha. Fazer com que a árvore tenha uma margem esquerda fixa de 30 espaços e fique centralizada, conforme ilustra a execução do programa a seguir:

//Altura da árvore: 8
const alturaDaArvore = Number(prompt("Qual a altura da árvore?: "));
const margem = " ".repeat(30);
let tamanhoMaximo = alturaDaArvore * 2;

for (let i = 1; i <= alturaDaArvore; i++) {
  let tamanhoAtual = i * 2;
  let espacoParaCentralizar = (tamanhoMaximo - tamanhoAtual) / 2;
  let preenchimento = " ".repeat(espacoParaCentralizar);
  let estrelas = "**".repeat(i);

  console.log(margem + preenchimento + estrelas);
}
