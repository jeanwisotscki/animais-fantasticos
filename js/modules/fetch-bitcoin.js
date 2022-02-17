export default function initFetchBitcoin() {}

fetch("https://blockchain.info/ticker")
  .then((res) => res.json())
  .then((bitcoin) => {
    const btcPreco = document.querySelector(".btc-preco");
    btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(4);
  })
  .catch((erro) => {
    console.log("Erro. Tente novamente mais tarde. ", erro);
  });
