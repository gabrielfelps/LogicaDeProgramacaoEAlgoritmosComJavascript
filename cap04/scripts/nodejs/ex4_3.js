const prompt = require("prompt-sync")();
/* Elaborar um programa para simular um parquímetro, o qual leia o valor de moedas depositadas em um terminal de estacionamento rotativo. O programa deve informar o tempo de permanência do veículo no local e o troco (se existir). Se o valor for inferior ao tempo mínimo, exiba a mensagem "Valor Insuficiente."

Valor R$ - Tempo(min)
- 1,00     30
- 1,75     60
- 3,00     120

(o máximo é 120 min) */

const valorDepositado = parseFloat(prompt("Valor R$: "));

let tempoMinutos;
let valorMinimo;

if (valorDepositado >= 3.00) {
  tempoMinutos = 120;
  valorMinimo = 3.00;
} else if (valorDepositado >= 1.75) {
  tempoMinutos = 60;
  valorMinimo = 1.75;
} else if (valorDepositado >= 1.00) {
  tempoMinutos = 30;
  valorMinimo = 1.00;
} else {
  console.log("Valor Insuficiente");
  return;
}

const troco = valorDepositado - valorMinimo;

console.log(`Tempo: ${tempoMinutos} min`);
console.log(
  `Troco: ${troco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}`
);
