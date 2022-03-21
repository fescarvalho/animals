import AnimaNumeros from "./anima-numeros.js";

export default function initAnimaisFetch() {
  //Criando a nova div
  function createDivAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  async function animaisFetch(url) {
    try {
      //Fetch na API
      const animaisUrl = await fetch(url);
      const animaisRes = await animaisUrl.json();
      //selecionando o local no body
      const olDiv = document.querySelector(".numeros-grid");

      //forEach
      animaisRes.forEach((animal) => {
        const newDiv = createDivAnimal(animal);
        olDiv.appendChild(newDiv);
      });

      //funcao de animacao dos numeros
      const animaNumeros = new AnimaNumeros(
        "[data-numero]",
        ".numeros",
        "ativo"
      );
      animaNumeros.init();
    } catch (error) {
      Error(error);
    }
  }
  //chamando a APi
  animaisFetch("../../animaisapi.json");
}
