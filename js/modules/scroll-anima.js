export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    // bind do this do objeto
    this.checkDistance = this.checkDistance.bind(this);
  }

  // pega a distancia de cada item em relação
  // ao topo do site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;

      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  // verifica a distancia em cada objeto em
  // relação ao scroll do site
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.classList.add("ativo");
      } else if (item.classList.contains("ativo")) {
        item.classList.remove("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }

    return this;
  }

  // para o evento de scroll
  destroy() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
