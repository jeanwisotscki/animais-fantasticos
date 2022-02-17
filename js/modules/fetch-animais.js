import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  function createAnimal(animal) {
    // div que vai mostrar os dados no html
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    // inserir os dados na div
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.numero}</span>`;

    return div;
  }

  async function fetchAnimais(url) {
    // recebe a resposta do url
    const animaisResponse = await fetch(url);
    // recebe o json da resposta
    const animaisJson = await animaisResponse.json();
    // local onde os números serão exibidos no html
    const numerosGrid = document.querySelector(".numeros-grid");

    animaisJson.forEach((animal) => {
      // recebe uma div com os dados contidos em 'animal'
      const divAnimal = createAnimal(animal);
      // adiciona essa div acima no html
      numerosGrid.appendChild(divAnimal);
    });

    initAnimaNumeros();
  }

  fetchAnimais("./animais-api.json");
}
