export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.modalAbrir = document.querySelector(botaoAbrir);
    this.modalFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    //bind this ao callback para
    //fazer referencia ao objeto
    //da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.modalCLose = this.modalCLose.bind(this);
  }

  //abre e fecha o modal
  modalToggle() {
    this.containerModal.classList.toggle("ativo");
  }
  //adciona o evento de otglee ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.modalToggle();
  }

  //fecha modal ao clicar do lado de fora
  modalCLose(event) {
    if (event.target === this.containerModal) {
      this.modalToggle();
    }
  }

  //adciona os elementos ao clicar no modal
  addModalEvent() {
    this.modalAbrir.addEventListener("click", this.eventToggleModal);
    this.modalFechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.modalCLose);
  }

  init() {
    if (this.containerModal && this.modalFechar && this.modalAbrir)
      this.addModalEvent();
    return this;
  }
}
