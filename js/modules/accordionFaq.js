export default class AccordionFaq {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  //adciona os eventos ao accordion
  accordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

  //iniciar funcao
  init() {
    if (this.accordionList.length) {
      //ativar primeiro item
      this.toggleAccordion(this.accordionList[0]);
      this.accordionEvent();
    }
    return this;
  }
}
