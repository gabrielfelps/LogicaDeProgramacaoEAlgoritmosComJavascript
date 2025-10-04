// Você deve desenvolver um programa de criptografia para transmitir mensagens entre amigos. O programa deve ler uma mensagem e, em seguida, exibi-la criptografada. A criptografia consiste em: a) exibir todas as letras de posições pares da mensagem; b) exibir todas as letras das posições impares da mensagem. O programa deve conter ainda um botão para descriptografar a mensagem, ou seja, retomar a mensagem original a partir do texto cifrado.
const form = document.forms.criptografia;
const criptografar = form.btnCriptografar;
const decriptografar = form.btnDecriptografar;
const menssagem = document.getElementById("mensagem");

criptografar.addEventListener("click", (e) => {
  e.preventDefault();

  const frasePar = [];
  const fraseImpar = [];

  menssagem.innerText = "";
  const inputValue = form.inMessage.value;

  for (let i = 0; i < inputValue.length; i++) {
    if (i % 2 === 0) {
      frasePar.push(inputValue.charAt(i));
    } else {
      fraseImpar.push(inputValue.charAt(i));
    }
  }

  const fraseCriptografada = frasePar.join("") + fraseImpar.join("");
  menssagem.innerText = fraseCriptografada;
  decriptografar.disabled = false;
  criptografar.disabled = true;
});

decriptografar.addEventListener("click", (e) => {
  e.preventDefault();

  let partePar = [];
  let parteImpar = [];

  const mensagemCriptografada = menssagem.innerText;

  if (mensagemCriptografada.length % 2 === 0) {
    const metadePalavra = mensagemCriptografada.length / 2;
    partePar = mensagemCriptografada.slice(0, metadePalavra);
    parteImpar = mensagemCriptografada.slice(metadePalavra);
  } else {
    const metadePalavra = Math.ceil(mensagemCriptografada.length / 2);
    partePar = mensagemCriptografada.slice(0, metadePalavra);
    parteImpar = mensagemCriptografada.slice(metadePalavra);
  }

  let mensagemFinal = "";

  for (let i = 0; i < partePar.length; i++) {
    mensagemFinal += partePar[i];

    if (parteImpar[i] !== undefined) {
      mensagemFinal += parteImpar[i];
    }
  }

  menssagem.innerText = mensagemFinal;
  criptografar.disabled = false;
  decriptografar.disabled = true;
});
