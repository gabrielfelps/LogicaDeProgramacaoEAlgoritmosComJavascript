/* Elaborar um programa que simule saques em um caixa eletrônico de um banco. Ler o valor solicitado por clientes até ser digitado 0. Sabendo que o caixa dispõe apenas de notas de 10, exiba após cada leitura se o saque é válido ou inválido. Ao final, listar os saques válidos e a soma dos saques. Exiba também o número de saques inválidos.*/

const prompt = require("prompt-sync")();

const valoresDeSaque = [];
let tentativasInvalidas = 0;

console.log("Informe o valor dos saques ou 0 para sair.");

do {
  let valorDeSaque = Number(prompt("Informe o valor para sacar: R$"));

  if (valorDeSaque === 0) {
    break;
  }
  if (isNaN(valorDeSaque) || valorDeSaque < 0 || !(valorDeSaque % 10 === 0)) {
    tentativasInvalidas++;
    console.log(
      "\nErro... Valor inválido (deve ser positivo e múltiplo de 10)"
    );
  } else {
    valoresDeSaque.push(valorDeSaque);
    console.log(
      `\nSaque no valor de R$${valorDeSaque} realizado com sucesso.\n`
    );
  }
} while (true);

if (!valoresDeSaque.length) {
  console.log("Não foi realizado nenhuma transação. Programa Encerrado!");
  return;
}

console.log("\nSaques válidos");
console.log("-".repeat(40));

for (valor of valoresDeSaque) {
  console.log(
    `${valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`
  );
}

console.log("-".repeat(40));

const totalDeSaques = valoresDeSaque.reduce((acumulador, saqueAtual) => {
  return acumulador + saqueAtual;
});

console.log(
  totalDeSaques.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })
);
console.log(
  `N° de Tentativas de Saques (saques inválidos): ${tentativasInvalidas}`
);
