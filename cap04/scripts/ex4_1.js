const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = Number(form.inNumero.value);

  // Versão simplificada.
  resp.innerText = numero % 2 == 0 ? `${numero} é par` : `${numero} é ímpar`;

  // Versão tradicional
  /* if (numero % 2 == 0) {
    resp.innerText = `${numero} é par`;
  } else {
    resp.innerText = `${numero} é ímpar`;
  } */
});
