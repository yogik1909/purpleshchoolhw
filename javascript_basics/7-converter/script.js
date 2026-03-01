function convertCurrency(amount, fromCurrency, toCurrency) {
    const getExchangeRate = (currency) => {
        switch (currency.toLowerCase()) {
            case "usd":
                return 1.0;
            case "rub":
                return 33.0;
            default:
                return null;
        }
    }

    const exchangeRateFromCurrency = getExchangeRate(fromCurrency);
    const exchangeRateToCurrency = getExchangeRate(toCurrency);

    if (exchangeRateFromCurrency === null || exchangeRateToCurrency === null) {
        return null;
    }

    return amount * exchangeRateToCurrency / exchangeRateFromCurrency;
}

console.log(convertCurrency(1000, "RUB", "USD"));