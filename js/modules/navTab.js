export default class Tabnav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = "ativo";
  }

  //Ativa a tab de acordo com o index da mesma
  ativarTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direction = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direction);
  }

  //Adciona os eventos na tab
  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => this.ativarTab(index));
    });
  }

  init() {
    if (this.tabContent.length && this.tabMenu.length) {
      this.ativarTab(0);
      this.addTabNavEvent();
    }
  }
}
