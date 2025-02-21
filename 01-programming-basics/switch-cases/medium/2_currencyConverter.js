function currencyConverter(amount, currency) {
  switch (currency) {
    case "USD":
      return amount * 1.2;
    case "EUR":
      return amount * 1.1;
    case "INR":
      return amount * 1.3;
    case "JPY":
      return amount * 1.4;
  }
}
