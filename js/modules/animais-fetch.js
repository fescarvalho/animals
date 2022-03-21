import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  //Criando a nova divc
  //contendo informacoes
  //com o total de animais
  function createDivAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  //Preenche cada animal no DOM
  function preencherAnimal(animal) {
    //selecionando o local no body(Numeros Grid)
    const animaisGrid = document.querySelector(target);
    const newDiv = createDivAnimal(animal);
    animaisGrid.appendChild(newDiv);
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }
  //Puxa os animais atraves de um arquivo JSON
  //e cria cada animal utilizando creatANimal

  async function criarAnimais() {
    try {
      //Fetch na API e espera a resposta e Transforma a resposta em JSON
      const animaisUrl = await fetch(url);
      const animaisRes = await animaisUrl.json();

      //Apos a transformacao de JSON, ativa as funcoes
      //de preencher e animar os numeros
      animaisRes.forEach((animal) => preencherAnimal(animal));
      animaAnimaisNumeros();
    } catch (error) {
      Error(error);
    }
  }
  //chamando a APi
  return criarAnimais();
}
