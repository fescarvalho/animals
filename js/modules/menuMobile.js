import outsideClick from "./outsideClick.js";
export default class MenuMobile {
  constructor(btnMenu, lista, events) {
    this.menuButton = document.querySelector(btnMenu);
    this.menuList = document.querySelector(lista);
    // define touchstart e click como argumento padrão
    // de events caso o usuário não define
    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;
    this.activeClass = "active";

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.toggle(this.activeClass);
    this.menuButton.classList.toggle(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((evento) =>
      this.menuButton.addEventListener(evento, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
