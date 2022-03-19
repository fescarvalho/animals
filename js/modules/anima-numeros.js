export default function initAnimaNumeros() {
  function animacao() {
    const numbers = document.querySelectorAll("[data-numero]");

    numbers.forEach((number) => {
      const total = +number.innerText;
      const incremento = Math.floor(total / 100);

      let start = 0;

      const timer = setInterval(() => {
        start += incremento;
        number.innerText = start;

        if (start > total) {
          clearInterval(timer);
          number.innerText = total;
        }
      }, 25 * Math.random());
    });
  }

  /* --OBSERVADOR */
  let observe;
  function handleObserver(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observe.disconnect();
      animacao();
    }
  }
  const observerTargets = document.querySelector(".numeros");

  observe = new MutationObserver(handleObserver);
  observe.observe(observerTargets, { attributes: true });
}
