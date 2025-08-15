const form = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

form.addEventListener("submit", (e) => {
  const medicamento = form.medicamento.value;
  const precoBase = Number(form.preco.value);
  const precoPromocao = Math.floor(precoBase) * 2;

  resp1.innerText = `Promoção de ${medicamento}`;
  resp2.innerText = `Leve 2 por apenas R$: ${precoPromocao.toFixed(2)}`;

  e.preventDefault();
});
