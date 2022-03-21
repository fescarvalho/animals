export default function initFetchBitcoin() {
  console.log("teste");
  const url = "https://blockchain.info/ticker";
  fetch(url)
    .then((res) => res.json())
    .then((resJson) => {
      const bitcoin = (1000 / resJson.BRL.sell).toFixed(4);
      const divBitcoin = document.querySelector(".bitcoin");
      divBitcoin.innerText = bitcoin;
    })
    .catch((err) => {
      Error(err);
    });
}
