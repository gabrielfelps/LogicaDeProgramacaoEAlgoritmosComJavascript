const form = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const QUANTIDADE_ITENS = 2;

  const medicamento = form.medicamento.value;
  const precoBase = Number(form.preco.value);

  if (isNaN(precoBase) || precoBase <= 0) {
    alert("Por favor, insira um preço válido para o produto.");
    form.preco.focus();
    return;
  };

  const precoPromocao = Math.floor(precoBase) * QUANTIDADE_ITENS;

  const precoPromocaoFormatado = precoPromocao.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  resp1.innerText = `Promoção de ${medicamento}`;
  resp2.innerText = `Leve ${QUANTIDADE_ITENS} por apenas ${precoPromocaoFormatado}`;
});
