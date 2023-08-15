{
    const calculateResult = (amount, currency) => {
        const currencyUSD = 4.11;
        const currencyEUR = 4.46;

        switch (currency) {
            case "USD":
                return amount / currencyUSD;

            case "EUR":
                return amount / currencyEUR;
        }
    };

    const updateResultText = (amount, sum, currency) => {
        const sumElement = document.querySelector(".js-sum")
        sumElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${sum.toFixed(2)} ${currency}</strong>`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount")
        const currencyElement = document.querySelector(".js-currency")


        const amount = +amountElement.value
        const currency = currencyElement.value

        const sum = calculateResult(amount, currency);

        updateResultText(amount, sum, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form")

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}