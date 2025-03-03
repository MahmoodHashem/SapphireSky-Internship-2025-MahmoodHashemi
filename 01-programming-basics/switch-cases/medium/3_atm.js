/* 

6. Menu-Based ATM System

* Display a menu with options:
* 1 → Check Balance
* 2 → Withdraw Money
* 3 → Deposit Money
* 4 → Exit
* Use switch to perform the correct action based on the user’s choice.

*/

function atm() {
  let balance = 1000;
  let choice;
  do {
    choice = prompt(`
        1 → Check Balance
        2 → Withdraw Money
        3 → Deposit Money
        4 → Exit
        `);
    switch (choice) {
      case "1":
        console.log(`Your balance is ${balance}`);
        break;
      case "2":
        let withdraw = prompt("Enter the amount to withdraw");
        if (withdraw > balance) {
          console.log("Insufficient balance");
        } else {
          balance -= withdraw;
          console.log(`Your balance is ${balance}`);
        }
        break;

      case "3":
        let deposit = prompt("Enter the amount to deposit");
        console.log(typeof deposit)
        console.log(`Your balance is ${balance}`);
        break;
      case "4":
        console.log("Thank you for using our ATM");
        break;
      default:
        console.log("Invalid choice");
    }
  } while (choice !== "4");
}



