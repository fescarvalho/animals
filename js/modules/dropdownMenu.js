import outsideClick from "./outsideClick.js";
export default function initDropDown() {
  const dropDownMenus = document.querySelectorAll("[data-dropdown]");

  dropDownMenus.forEach((menu) => {
    menu.forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");

    outsideClick(this, "click", () => {
      this.classList.remove("active");
    });
  }
}
