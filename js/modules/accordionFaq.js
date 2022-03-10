export default function accordionFaq() {
  const accordionList = document.querySelectorAll("[data-menu='accordion'] dt");
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
