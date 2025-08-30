/* Elaborar um programa que leia nome e nota de 'n' alunos até o usuário digitar "Fim" no nome. Após, verifique e exiba a maior nota da turma. Se a maior nota for superior ou igual a 7, exiba os alunos que a obtiveram. Caso contrário, exiba a mensagem "Não há alunos em destaque na turma". */
const prompt = require("prompt-sync")();

let nome;
let nota;
const alunos = [];

do {
  nome = prompt("Digite o nome do aluno: ");
  while (nome === "") {
    console.log("Nomes não podem estar vazios.");
    nome = prompt("Digite o nome do aluno: ");
  }
  if (nome.toLowerCase() === "fim") {
    break;
  }

  nota = Number(prompt("Digite a nota do aluno: "));
  while (isNaN(nota) || nota < 0 || nota > 10) {
    console.log("Digite um número de 1 a 10 para a nota.");
    nota = Number(prompt("Digite a nota do aluno: "));
  }

  alunos.push({ nome, nota });
} while (true);

const maiorNota = alunos.reduce(
  (acumulador, notaAtual) =>
    acumulador > notaAtual.nota ? acumulador : notaAtual.nota,
  0
);
console.log(`A maior nota é: ${maiorNota}`);

if (maiorNota >= 7) {
  const alunosComMaiorNota = alunos
    .filter((aluno) => aluno.nota === maiorNota)
    .map((aluno) => aluno.nome)
    .join(", ");
  console.log(alunosComMaiorNota);
} else {
  console.log("Não há alunos em destaque na turma");
}
