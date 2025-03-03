console.log("-------------- This a guess number game ---------------------");
console.log("Guess the number: ");

const targetNum = 50;
let guess = 0; 

process.stdin.on("data", (data) => {
    guess = parseInt(data);
    if (guess === targetNum) {
        console.log("You got it! The number was", targetNum);
        process.exit();
    } else if (guess < targetNum) {
        console.log("Too low! Try again!");
    } else {
        console.log("Too high! Try again!");
    }
});
