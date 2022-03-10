export default function modalLogin() {
  const modalSection = document.querySelector("[data-modal='modal']");
  const modalFechar = document.querySelector("[data-modal='fechar']");
  const modalAbrir = document.querySelector("[data-modal='abrir']");

  if (modalSection && modalFechar && modalAbrir) {
    function modalToggle(e) {
      e.preventDefault();
      modalSection.classList.toggle("ativo");
    }

    function modalCLose(event) {
      if (event.target === this) {
        modalToggle(event);
      }
    }

    modalAbrir.addEventListener("click", modalToggle);
    modalFechar.addEventListener("click", modalToggle);
    modalSection.addEventListener("click", modalCLose);
  }
}
