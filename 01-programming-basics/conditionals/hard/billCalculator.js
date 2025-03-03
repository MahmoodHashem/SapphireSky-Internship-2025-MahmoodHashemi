/* 
 Electricity Bill Calculator
* Units Consumed:
* Up to 100 units: $0.50 per unit
* 101 to 200 units: $0.75 per unit
* 201 to 500 units: $1.20 per unit
* Above 500 units: $1.50 per unit
* Write a program that calculates the total electricity bill.

*/

function calculateBill(units) {
  let bill = 0;

  if (units <= 100) {
    bill = units * 0.5;
  } else if (units <= 200) {
    bill = 100 * 0.5 + (units - 100) * 0.75;
  } else if (units <= 500) {
    bill = 100 * 0.5 + 100 * 0.75 + (units - 200) * 1.2;
  } else {
    bill = 100 * 0.5 + 100 * 0.75 + 300 * 1.2 + (units - 500) * 1.5;
  }

  return bill; 
}