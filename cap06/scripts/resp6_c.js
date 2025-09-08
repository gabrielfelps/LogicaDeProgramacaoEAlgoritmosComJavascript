const form = document.querySelector("form");
const listarCandidatos = document.querySelector("#listarCandidatos");
const aprovados2Etapa = document.querySelector("#aprovados2Etapa");
const exibirInfo = document.querySelector("pre");

const candidatosInfo = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = form.inNomeCandidato.value.trim();

  if (nome === "") {
    exibirInfo.innerText = "Digite um valor válido para o nome.";
    form.inNomeCandidato.focus();
    return;
  }
  const numeroDeAcertos = Number(form.inNumeroDeAcertos.value);
  if (isNaN(numeroDeAcertos) || numeroDeAcertos < 0 || numeroDeAcertos > 90) {
    exibirInfo.innerText =
      "Digite um valor válido para o número de acertos, sendo eles: Um número positivo de 0 a 90.";
    form.inNumeroDeAcertos.focus();
    return;
  }

  candidatosInfo.push({ nome, acertos: numeroDeAcertos });

  form.inNomeCandidato.focus();
  form.reset();

  mostrarTodosOsCandidatos(candidatosInfo);
});

aprovados2Etapa.addEventListener("click", () => {
  const notaParaAprovacao = Number(prompt("Número de Acertos para Aprovação:"));

  const condidatosAprovados = candidatosInfo
    .filter((candidato) => candidato.acertos >= notaParaAprovacao)
    .sort((a, b) => b.acertos - a.acertos);

  if (condidatosAprovados.length === 0) {
    exibirInfo.innerText = "Nenhum candidato atende aos requisitos.";
    return;
  }
  mostrarTodosOsCandidatos(condidatosAprovados);
});

listarCandidatos.addEventListener("click", () =>
  mostrarTodosOsCandidatos(candidatosInfo)
);

function mostrarTodosOsCandidatos(array) {
  exibirInfo.innerText = ``;

  for (const item of array) {
    exibirInfo.innerText += `${item.nome} - ${item.acertos} acertos \n`;
  }
}
