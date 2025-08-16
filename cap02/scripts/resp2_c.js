const form = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const DESCONTO_PROMO = 0.5;
  const QUANTIDADE_ITENS_PRECO_CHEIO = 2;
  const QUANTIDADE_TOTAL_ITENS = 3;

  const produtoNome = form.produtoNome.value;
  const produtoPreco = Number(form.produtoPreco.value);

  if (isNaN(produtoPreco) || produtoPreco <= 0) {
    alert("Por favor, insira um preço válido para o produto.");
    form.produtoPreco.focus();
    return;
  }

  const produtoPrecoComDesconto = produtoPreco * DESCONTO_PROMO;
  const precoTotalPromocao = produtoPreco * QUANTIDADE_ITENS_PRECO_CHEIO + produtoPrecoComDesconto;

  const produtoPrecoFormatado = produtoPrecoComDesconto.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const produtoPrecoTotalFormatado = precoTotalPromocao.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  resp1.innerText = `${produtoNome} - Promoção: Leve ${QUANTIDADE_TOTAL_ITENS} por ${produtoPrecoTotalFormatado}`;
  resp2.innerText = `O 3° produto custa apenas ${produtoPrecoFormatado}`;
});
