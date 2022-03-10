export default function initNavTab() {
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li ');
  tabContent[0].classList.add("ativo");

  if (tabContent.length && tabMenu.length) {
    function ativarTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      const direction = tabContent[index].dataset.anime;
      tabContent[index].classList.add("ativo", direction);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        ativarTab(index);
      });
    });
  }
}
