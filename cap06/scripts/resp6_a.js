const form = document.querySelector("form");
const btnListarClubes = document.querySelector(".listar-clubes");
const btnMontarTabela = document.querySelector(".montar-tabelas");
const resp = document.querySelector("pre");
const paragraph = document.querySelector("p");

const clubes = [];

function adicionarEMostrar(e) {
  e.preventDefault();

  paragraph.innerText = "";

  const clubeNome = form.inClube.value.trim();

  const nomeValido = verificarNome(clubeNome);
  if (!nomeValido) return;

  clubes.push(clubeNome);
  mostrarTimes();
  form.reset();
  form.inClube.focus();
}

function mostrarTimes() {
  if (!clubes.length) {
    paragraph.innerText = "Não possui times adicionados.";
    return;
  }

  limparSaida();

  for (const clube of clubes) {
    resp.innerText += `${clube} \n`;
  }
}

function montarTabelas() {
  if (!clubes.length || !(clubes.length % 2 === 0)) {
    paragraph.innerText =
      "Precisa ter pelo menos dois clubes ou pares de clubes.";
    return;
  }

  limparSaida();
  const clubesTabelas = clubes.slice();

  for (let i = 0; i < clubes.length / 2; i++) {
    resp.innerText += `${clubesTabelas.shift()} x ${clubesTabelas.pop()} \n`;
  }
}

function verificarNome(clubeNome) {
  if (clubeNome === "") {
    paragraph.innerText = "Digite um nome válido.";
    form.inClube.focus();
    return false;
  }
  if (clubes.includes(clubeNome)) {
    paragraph.innerText = "Já existe um clube com esse nome.";
    form.inClube.focus();
    return false;
  }

  return clubeNome;
}

function limparSaida() {
  paragraph.innerText = "";
  resp.innerText = "";
}

form.addEventListener("submit", adicionarEMostrar);
btnListarClubes.addEventListener("click", mostrarTimes);
btnMontarTabela.addEventListener("click", montarTabelas);
