export default class Funcionamento {
  constructor(dataSemana, activeClass) {
    this.funcionamento = document.querySelector(dataSemana);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(",")
      .map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto =
      this.horarioSemana[0] < this.horarioAgora &&
      this.horarioSemana[1] >= this.horarioAgora;
    return semanaAberto && horarioAberto;
  }

  ativarAberto() {
    if (this.estaAberto()) this.funcionamento.classList.add(this.activeClass);
  }
  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativarAberto();
    }
    return this;
  }
}