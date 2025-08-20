/* Elaborar um programa para uma veterinária, que leia o peso de uma ração em kg e o quanto um gato consome por dia da ração, em gramas. Informe quantos dias irá durar a ração e o quanto sobra de ração (em gramas).*/

const prompt = require("prompt-sync")();

const GRAMA_CONVERSOR = 1000;

const pesoRacaoKg = Number(prompt("Qual o peso do saco de ração (em kg)? "));
const consumoDiarioGramas = Number(prompt("Qual o consumo diário do animal (em gramas)? "));

const pesoRacaoGramas = pesoRacaoKg * GRAMA_CONVERSOR;

const duracaoRacaoEmDias = Math.floor(pesoRacaoGramas / consumoDiarioGramas);
const sobraRacaoEmGramas = pesoRacaoGramas % consumoDiarioGramas;

console.log(`Peso da Ração (kg): ${pesoRacaoKg}\nConsumo diário (gr): ${consumoDiarioGramas}\nDuração: ${duracaoRacaoEmDias} dias\nSobra: ${sobraRacaoEmGramas}gr`);