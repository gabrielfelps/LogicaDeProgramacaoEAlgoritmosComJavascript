const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const VALOR_MINUTO = 15;

  const valorPor15Minutos = Number(form.valorUso.value);
  const tempoTotalEmMinutos = Number(form.tempoUso.value);

  if (isNaN(valorPor15Minutos) || valorPor15Minutos <= 0) {
    alert("Por favor, insira um valor válido por 15 minutos de uso.");
    form.valorUso.focus();
    return;
  } else if (isNaN(tempoTotalEmMinutos) || tempoTotalEmMinutos <= 0) {
    alert("Por favor, insira um valor válido para o tempo de uso.");
    form.tempoUso.focus();
    return;
  };

  const pagamento = Math.ceil(tempoTotalEmMinutos / VALOR_MINUTO) * valorPor15Minutos;
  const pagamentoFormatado = pagamento.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  resp.innerText = `Valor a Pagar ${pagamentoFormatado}`;
});
