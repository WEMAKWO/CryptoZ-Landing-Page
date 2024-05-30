let amountInput = document.querySelector("#amount-input");
let money = document.querySelector("#money");
let toCrypto = document.querySelector("#toCrypto");
let convertButton = document.querySelector("#convert");
let resultParagraph = document.querySelector(".display-results");

//Fuction to convert a currency into a crypto currency using, the addeventlistenner click function and an api
convertButton.addEventListener("click", () => {
  let amount = amountInput.value;
  let fromCurrency = money.value;
  let toCurrency = toCrypto.value;
  let apiKey =
    "685419b6bedfb725bb6af07ed3dd6fef8f20a83f05c066d1eb20a10c563c7801";
  let apiUrl = `https://min-api.cryptocompare.com/data/price?fsym=${toCurrency}&tsyms=${fromCurrency}&api_key=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      let rate = data[fromCurrency];
      let result = amount / rate;

      resultParagraph.innerHTML = `${amount} ${fromCurrency} is equal to ${result.toFixed(
        8
      )} ${toCurrency}`;
    })
    .catch((error) => {
      resultParagraph.innerHTML = "Error: Unable to fetch exchange rate.";
      console.error(error);
    });
});

//Funtion to display selected currency name on the converter
function displayCurrencyName() {
  let selectedFromCurrency = document.getElementById("money");
  let nameOfCurrency =
    selectedFromCurrency.options[selectedFromCurrency.selectedIndex].text;
  document.getElementById("mainCurrencyName").innerHTML = nameOfCurrency;
}

//Funtion to display selected bitcoin name on the converter
function displayCryptoName() {
  let selectedBitcoin = document.getElementById("toCrypto");
  let nameOfBitcoin =
    selectedBitcoin.options[selectedBitcoin.selectedIndex].text;
  document.getElementById("bitcoinName").innerHTML = nameOfBitcoin;
}
