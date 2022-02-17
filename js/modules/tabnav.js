export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  function activeTab(index) {
    const animationDirection = tabContent[index].dataset.anime;

    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });

    tabContent[index].classList.add("ativo", animationDirection);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
