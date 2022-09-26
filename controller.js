// Fetch chuckNorris API
//OSCAR
function fetchJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((data) => {
      joke = data.value;
    })
    .catch((err) => {
      throw err;
    });
  showJoke();
}

function getJoke() {
  setTimeout(function () {
    fetchJoke();
  }, 1000);
}

//ROBERT
function calcInterest(startSum, numberOfYears, interest, compoundNumber) {
  let amount =
    startSum * Math.pow(1 + interest / 100, compoundNumber * numberOfYears);
  calculatedAnswer = amount.toFixed(2);
  showInterest();
}

//ANDY
function ticketPricePerAge() {
  age.push(ageInput);
  revenue = 0;
  for (let i = 0; i < age.length; i++) {
    // ticketAge = age[i] <= 16 ? ticket = "barn"; ticketProfit = 25; : age[i] <= 55
    if (age[i] <= 16) {
      ticket = "Barne";

      ticketProfit = 25;
      totalChildren++;
    } else if (age[i] <= 55) {
      ticket = "Voksen";
      ticketProfit = 50;
      totalAdult++;
    } else {
      ticket = "Honnør";
      ticketProfit = 39;
      totalElder++;
    }
    revenue = 25 * totalChildren + 50 * totalAdult + 39 * totalElder;
    earnings = 25 * totalChildren + 50 * totalAdult + 39 * totalElder;
  }
  showTicket();
}

//ANDY
function dailyEarnings() {
  moneyMade = earnings;
  revenue = 0;
  totalChildren = 0;
  totalAdult = 0;
  totalElder = 0;
  ageInput = 0;
  age = [];
  ticket = "";
  ticketProfit = 0;
  showTicket();
}
