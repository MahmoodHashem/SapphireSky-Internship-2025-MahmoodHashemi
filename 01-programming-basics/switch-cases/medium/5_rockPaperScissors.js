


function getResult(you, computer){

    switch(true){
        case you === computer:
            return "Tie";
        case you === "rock" && computer === "scissors":
        case you === "paper" && computer === "rock":
        case you === "scissors" && computer === "paper":
            return "You win";
        default:
            return "Computer wins";
    }
}


function computerChoice(){
    const choices =[
         "rock",
         "paper",
         "scissors"
    ]


    return choices[Math.floor(Math.random() * 3)]; 
}



console.log(getResult('rock', computerChoice()))