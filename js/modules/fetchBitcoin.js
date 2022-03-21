export default function initFetchBitcoin(url, target) {
  fetch(url)
    .then((res) => res.json())
    .then((resJson) => {
      const divBitcoin = document.querySelector(target);
      const bitcoin = (1000 / resJson.BRL.sell).toFixed(4);
      divBitcoin.innerText = bitcoin;
    })
    .catch((err) => {
      Error(err);
    });
}
