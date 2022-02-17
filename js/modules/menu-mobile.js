import outsideClick from "./outside-click.js";

export default function initMenuMobile() {
  const menuBtn = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  function toggleMenu(event) {
    event.preventDefault();
    menuList.classList.add("active");
    menuBtn.classList.add("active");

    outsideClick(menuList, ["click", "touchstart"], () => {
      menuList.classList.remove("active");
      menuBtn.classList.remove("active");
    });
  }

  if (menuBtn) {
    eventos.forEach((evento) => menuBtn.addEventListener(evento, toggleMenu));
  }
}
