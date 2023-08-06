let amountElement = document.querySelector(".js-amount")
let formElement = document.querySelector(".js-form")
let currencyElement = document.querySelector(".js-currency")
let sumElement = document.querySelector(".js-sum")

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyElement.value;
    let amount = amountElement.value;
    let sum = sumElement.value;
    let currencyUSD = 4.11;
    let currencyEUR = 4.46;

    switch (currency) {
        case "USD":
            sum = amount * currencyUSD;
            break;
        case "EUR":
            sum = amount * currencyEUR;
            break;
    }
    
    sumElement.innerText = `${sum.toFixed(2)} ${currency}`;

});