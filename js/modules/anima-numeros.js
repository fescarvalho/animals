export default class AnimaNumeros {
  constructor(numbers, observerTarget, observeClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.observeClass = observeClass;
    this.observerTarget = document.querySelector(observerTarget);

    //this do objeto ao callback da mutacao
    this.handleMutation = this.handleMutation.bind(this);
  }

  //recebe um elemento do DOM
  //com numero em seu textomaior
  //inrementa de 0 ate o numero final
  static incrementarNumero(number) {
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
  }

  //Ativa increarNumero para cada numero do DOM
  animaNumeros() {
    this.numbers.forEach((number) =>
      this.constructor.incrementarNumero(number)
    );
  }

  /* --OBSERVADOR */
  //funcaoqu ocorre quando a mutacao ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observeClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  //Adciona o mutation observer
  //quando a classe ativo e adcionada ao elemento target
  addMutationObserve() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numbers.length && this.observerTarget) this.addMutationObserve();
    return this;
  }
}
