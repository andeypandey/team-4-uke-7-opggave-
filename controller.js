const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4ee1c2ab48msh8facb2f931e5d9fp19a8b6jsn3d97e7916e50",
    "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
  },
};

//GI OSS API KEY HER:

function getCurrency() {
  fetch(
    "https://alpha-vantage.p.rapidapi.com/query?from_currency=BTC&function=CURRENCY_EXCHANGE_RATE&to_currency=USD",
    options
  )
    .then((btcres) => btcres.json())
    .then((btcres) => {
      console.log(btcres);
      cryptoCurrency += btcres;
    })
    .catch((err) => console.error(err));
}

// Funksjon for å regne ut tid
function getJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((data) => {
      joke = data.value;
    });
  showJoke();
}

function calcInterest() {
  calculatedAnswer =
    Math.pow(sumInterest * (interestInterest / 100 + 1)) ^ yearInterest;
  showInterest();
}
