const form = document.querySelector("form");
const resp = document.querySelector("#resultado");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nomeFruta = form.inNomeFruta.value.trim();
  const repetirVezes = Number(form.inVezesRepeticao.value);

  if (nomeFruta === "" || isNaN(repetirVezes) || repetirVezes <= 0) {
    alert("Por favor, preencha os campos corretamente.");
    return;
  }

  const frutas = [];
  for (let i = 1; i <= repetirVezes; i++) {
    frutas.push(nomeFruta);
  }

  const resultadoFinal = frutas.join(" * ");

  resp.innerText = resultadoFinal;
});
