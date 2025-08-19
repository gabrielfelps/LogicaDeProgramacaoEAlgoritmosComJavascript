const prompt = require("prompt-sync")();

const veiculo = prompt("Veiculo: ");
const preco = Number(prompt("Preço R$: "));

const entrada = preco * 0.5;
const parcela = entrada / 12;

console.log(`Promoção: ${veiculo}`);
console.log(
  `Entrada de ${entrada.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })}`
);
console.log(
  `+12x de ${parcela.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })}}`
);
