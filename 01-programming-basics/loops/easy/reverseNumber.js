function reverse(num) {
  let number = num.toString();
  let reversed = "";

  for (let i = number.length - 1; i >= 0; i--) {
    reversed += number[i];
  }

  return parseInt(reversed);
}


let num = 2345; 
let reversed = 0; 

while(num > 0){

  let digit = num % 10;
  reversed = reversed * 10 + digit;
  num = Math.floor(num / 10);
}

console.log(reversed);
