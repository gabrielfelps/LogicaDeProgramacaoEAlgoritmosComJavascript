/* Elabore um programa para uma empres que leia o salário e o tempo que um funcionário trabalha na empresa. Sabendo que a cada 4 anos (quadriênio) o funcionário recebe um acrescimo de 1% no salário, calcule ee informe o número de quadriênios a que o funcionário tem direito e o salário final. */

const prompt = require("prompt-sync")();

const ANOS_POR_QUADRIENIO = 4;
const PERCENTUAL_ACRESCIMO_POR_QUADRIENIO = 0.01;

const salario = Number(prompt("Salário do funcionário R$: "));
const tempoAnos = Number.parseInt(prompt("Digite o tempo trabalhado do funcionário: "));

const quadrienio = Math.floor(tempoAnos / ANOS_POR_QUADRIENIO);
const bonus = (PERCENTUAL_ACRESCIMO_POR_QUADRIENIO * quadrienio) * salario;
const salarioFinal = salario + bonus;

console.log(`Quadriênios: ${quadrienio}`);
console.log(salarioFinal.toLocaleString("BRL", {
  style: "currency",
  currency: "BRL",
}));