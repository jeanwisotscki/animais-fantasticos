import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  function createAnimal(animal) {
    // div que vai mostrar os dados no html
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    // inserir os dados na div
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.numero}</span>`;

    return div;
  }

  // local onde os números serão exibidos no html
  const numerosGrid = document.querySelector(target);

  function preencherAnimais(animal) {
    // recebe uma div com os dados contidos em 'animal'
    const divAnimal = createAnimal(animal);
    // adiciona essa div acima no html
    numerosGrid.appendChild(divAnimal);
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  async function criarAnimais() {
    try {
      // recebe a resposta do url
      const animaisResponse = await fetch(url);
      // recebe o json da resposta
      const animaisJson = await animaisResponse.json();

      animaisJson.forEach((animal) => preencherAnimais(animal));

      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
