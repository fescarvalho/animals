import outsideClick from "./outsideClick.js";
export default function initMenuMobile() {}

const sobre = document.querySelector("[data-dropdown]");
sobre.addEventListener("click", (e) => {
  e.preventDefault();
});

const menuButton = document.querySelector('[data-menu="mobile"]');
const menuList = document.querySelector('[data-menu="lista"]');

function hoverMenu(e) {
  menuList.classList.toggle("active");
  menuButton.classList.toggle("active");
  outsideClick(menuList, ["click", "touchstart"], () => {
    menuList.classList.remove("active");
    menuButton.classList.remove("active");
  });
}

menuButton.addEventListener("click", hoverMenu);
