const form = document.querySelector("form");
const btn = document.querySelector("#btnVerificarOrdem");
const exibirResultado = document.querySelector("pre");
const exibirAviso = document.querySelector("p");

const numeros = [];

function limparSaida() {
  exibirAviso.innerText = "";
  exibirResultado.innerText = "";
}

function validarNumero(valor) {
  if (isNaN(valor) || valor <= 0) {
    exibirAviso.innerText = "Digite um número válido maior que zero.";
    return false;
  }
  if (numeros.includes(valor)) {
    exibirAviso.innerText = "Esse número já existe na lista.";
    return false;
  }
  return valor;
}

function mostraNaTela() {
  if (!numeros.length) {
    exibirAviso.innerText = "Não existe números na lista.";
  }

  limparSaida();

  exibirResultado.innerText = numeros.join(", ");
}

function adicionarNumero(e) {
  e.preventDefault();

  const numero = parseInt(form.inNumero.value, 10);
  const validacaoDeNumero = validarNumero(numero);

  if (!validacaoDeNumero) {
    return;
  }

  limparSaida();

  numeros.push(numero);
  mostraNaTela();
  form.inNumero.focus();
  form.reset();
}

function verificarOrdemNumerica() {
  exibirAviso.innerText = "";

  if (numeros.length < 2) {
    exibirAviso.innerText =
      "É preciso ter pelo menos 2 números para verificar a ordem.";
    return;
  }

  for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i] > numeros[i + 1]) {
      exibirAviso.innerText = "A lista de número NÃO está em ordem crescente.";
      return;
    }
  }
  exibirAviso.innerText = "A lista de número está em ordem crescente.";
}

form.addEventListener("submit", adicionarNumero);
btn.addEventListener("click", verificarOrdemNumerica);
