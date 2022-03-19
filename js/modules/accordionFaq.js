export default function accordionFaq() {
  const accordionList = document.querySelectorAll("[data-menu='accordion'] dt");
  const activeClass = "ativo";
  accordionList[0].classList.add(activeClass);
  accordionList[0].nextElementSibling.classList.add(activeClass);

  function ativarAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }
  if (accordionList.length) {
    accordionList.forEach((item) => {
      item.addEventListener("click", ativarAccordion);
    });
  }
}
console.log("ola mundo");
