export default function initModal() {
  const btnAbrir = document.querySelector('[data-modal="abrir"]');
  const btnFechar = document.querySelector('[data-modal="fechar"]');
  const btnEntrar = document.querySelector('[data-modal="entrar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
  }

  function cliqueForaModal(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  function fazerLogin(event) {
    event.preventDefault();
    console.log("Caaaalma, veloz!");
  }

  if (btnAbrir && btnFechar && btnEntrar && containerModal) {
    btnAbrir.addEventListener("click", toggleModal);
    btnFechar.addEventListener("click", toggleModal);
    btnEntrar.addEventListener("click", fazerLogin);
    containerModal.addEventListener("click", cliqueForaModal);
  }
}
