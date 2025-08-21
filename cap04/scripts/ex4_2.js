/* Elaborar um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor. Se a velocidade for inferior ou igual à permitida, exiba "Sem Multa". Se a velocidade for de até 20% maior que a permitida, exiba "Multa Leve". E se a velocidade for superior a 20% da velocidade permitida, exiba "Multa Grave". */
const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const velocidadePermitida = Number(form.inVelocidadePermitida.value);
  const velocidadeDoCondutor = Number(form.inVelocidadeCondutor.value);

  if (
    isNaN(velocidadeDoCondutor) ||
    isNaN(velocidadePermitida) ||
    velocidadeDoCondutor < 0 ||
    velocidadePermitida < 0
  ) {
    alert("Por favor, insira valores numéricos válidos e positivos.");
    return;
  }

  const numPorcentagem = velocidadePermitida * 0.2;

  if (velocidadeDoCondutor <= velocidadePermitida) {
    resp.innerText = "Sem Multa.";
  } else if (velocidadeDoCondutor <= velocidadePermitida + numPorcentagem) {
    resp.innerText = "Multa Leve";
  } else {
    resp.innerText = "Multa grave";
  }
});
