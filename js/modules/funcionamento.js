export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-dias]");
  const diasSemana = funcionamento.dataset.dias.split(",").map(Number);

  const horario = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horaAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto = horaAgora >= horario[0] && horaAgora < horario[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}

// getTime()
/*
O método getTime() mostra o tempo total em
milissegundos desde o dia 1 de janeiro de 1970.
*/
// agora.getTime()

/* FUNÇÃO PRA CONVERTER DATA PARA DIAS
 **************************************************** */

// const agora = new Date();
// const promocao = new Date("may 13 2022 23:59:59");

// function converterEmDias(time) {
//   return time / (24 * 60 * 60 * 1000);
// }

// const diasAgora = converterEmDias(agora);
// const diasPromocao = converterEmDias(promocao);

// const faltam = diasPromocao - diasAgora;

// console.log(faltam);
// console.log(agora);
/* ************************************************** */
