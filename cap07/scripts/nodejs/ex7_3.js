const prompt = require("prompt-sync")();

// Elaborar um programa que solicite um número de parcelas que devem ser geradas e calcule a data de cada uma dessas parcelas, uma para cada mês, a partir do mês seguinte ao atual, mantendo o dia atual. Observe o exemplo de execução desse programa, considerando que a data anual seja de 5 de janeiro de 2022.

// Quantas parcelas? 6
/* 
1° Parcela: 05/02/2022
2° Parcela: 05/03/2022
3° Parcela: 05/04/2022
4° Parcela: 05/05/2022
5° Parcela: 05/06/2022
6° Parcela: 05/07/2022
*/

const numeroDeParcelas = prompt("Deseja parcelar em quantas vezes?");

const data = new Date("2022/01/05");
const mes = new Date("2022/01/05").getMonth();

for (let i = 1; i <= numeroDeParcelas; i++) {
  data.setMonth(mes + i);
  console.log(`${i}° Parcela: ${data.toLocaleDateString()}`);
}
