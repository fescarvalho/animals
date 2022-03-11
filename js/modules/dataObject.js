export default function initDataObject() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const isAbertoSemana = diasSemana.indexOf(diaAgora) !== -1;
  const isAbertoHorario =
    horarioSemana[0] < horarioAgora && horarioSemana[1] >= horarioAgora;

  if (isAbertoSemana && isAbertoHorario) {
    funcionamento.classList.add("aberto");
  }
}
