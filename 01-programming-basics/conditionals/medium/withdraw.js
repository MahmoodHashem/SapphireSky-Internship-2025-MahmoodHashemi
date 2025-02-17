/*
 * ATM Withdrawal
 * A person wants to withdraw money from an ATM.
 * If the withdrawal amount is a multiple of 10, allow withdrawal.
 * If not, print an error message.
 * If the account balance is less than the withdrawal amount, print "Insufficient Funds".
 */

function withdraw(amount) {
  balance = 20000;

  return amount % 10 === 0
    ? balance >= amount
      ? "Withdrawal Successful"
      : "Insufficient Funds"
    : "Invalid Amount";
}
