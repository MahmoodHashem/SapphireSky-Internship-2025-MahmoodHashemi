

function palindrome(num){
    let number = num.toString();
    let reversed = "";
    for(let i = number.length - 1; i >= 0; i--){
        reversed += number[i];
    }

    return number === reversed;
}


console.log(palindrome(122));