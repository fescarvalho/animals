import initAnimaNumeros from "./anima-numeros.js";

export default function initAnimaisFetch() {
  try {
    async function animaisFetch(url) {
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
      initAnimaNumeros();
    }

    //Criando a nova div
    function createDivAnimal(animal) {
      const div = document.createElement("div");
      div.classList.add("numero-animal");
      div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
      return div;
    }
    //chamando a APi
    animaisFetch("../../animaisapi.json");
  } catch (error) {
    Error(error);
  }
}
