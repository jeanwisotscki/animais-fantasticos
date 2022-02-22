export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((res) => res.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(4);
    })
    .catch((erro) => {
      console.log("Erro. Tente novamente mais tarde. ", erro);
    });
}
