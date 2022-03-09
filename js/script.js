function initNavTab() {
  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  const tabMenu = document.querySelectorAll("[data-tab='menu']  li ");
  tabContent[0].classList.add("ativo");

  if (tabContent.length && tabMenu.length) {
    function ativarTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add("ativo", direcao);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        ativarTab(index);
      });
    });
  }
}
initNavTab();

function accondionFaq() {
  const accordionList = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );
  const activeClass = "ativo";
  accordionList[0].classList.add(activeClass);
  accordionList[0].nextElementSibling.classList.add(activeClass);

  if (accordionList.length) {
    function ativarAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", ativarAccordion);
    });
  }
}
accondionFaq();

function scrollSmooth() {
  const links = document.querySelectorAll('[data-suave="scroll"] a[href^="#"]');

  if (links.length) {
    function scroll(e) {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    links.forEach((link) => {
      link.addEventListener("click", scroll);
    });
  }
}
scrollSmooth();

function scrollAnimation() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  if (sections.length) {
    function scrollAtivo() {
      const windowTop = window.innerHeight * 0.55;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionActive = sectionTop - windowTop < 0;

        if (sectionActive) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }
    scrollAtivo();
    window.addEventListener("scroll", scrollAtivo);
  }
}
scrollAnimation();
