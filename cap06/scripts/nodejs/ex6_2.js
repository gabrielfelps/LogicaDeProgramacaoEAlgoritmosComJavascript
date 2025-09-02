/*  Elaborar um programa que leia nom e idade de "n" clientes de um banco (até ser digitado "Fim" no nome). Após, classifique e exiba os clientes em 2 grupos: preferencial (a partir dos 60) e fila normal (até 59). Informe a ordem de atendimento em cada grupo de acordo com a chegada dos clientes. */
const prompt = require("prompt-sync")();

const filaParaAtendimento = [];
const IDADE_PREFERENCIAL = 60;

console.log(
  "Informe os clientes em ordem de chegada ou 'Fim' no nome para sair"
);
do {
  let nome = prompt("Digite o nome do cliente: ");
  while (nome === "") {
    console.log("\nDigite um valor válido para o nome.");
    nome = prompt("Digite o nome do cliente novamente: ");
  }
  if (nome.toLowerCase() === "fim") {
    break;
  }

  let idade = Number(prompt("Digite a idade do cliente: "));
  while (isNaN(idade) || idade <= 0) {
    console.log("\nDigite um numero positivo ou maior que zero para a idade .");
    idade = prompt("Digite a idade do cliente novamente: ");
  }

  filaParaAtendimento.push({ nome, idade });
  console.log(`\nNome: ${nome}\nIdade: ${idade}\nOk! Cliente adicionado...\n`);
} while (true);

const filaPreferencial = [];
const filaNaoPreferencial = [];

for (const cliente of filaParaAtendimento) {
  if (cliente.idade >= IDADE_PREFERENCIAL) {
    filaPreferencial.push(cliente);
  } else {
    filaNaoPreferencial.push(cliente);
  }
}

if (filaPreferencial.length) {
  console.log("\nFila preferencial:");
  console.log("-".repeat(40));
  filaPreferencial.forEach((cliente, index) =>
    console.log(`${index + 1}. ${cliente.nome}`)
  );
} else {
  console.log("\nNão há pacientes na fila preferencial.");
}

if (filaNaoPreferencial.length) {
  console.log("\nFila normal:");
  console.log("-".repeat(40));
  filaNaoPreferencial.forEach((cliente, index) =>
    console.log(`${index + 1}. ${cliente.nome}`)
  );
} else {
  console.log("\nNão há pacientes na fila normal.");
}
