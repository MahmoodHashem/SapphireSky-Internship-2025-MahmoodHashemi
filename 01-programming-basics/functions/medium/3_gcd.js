

function gcd (num1, num2){

    while(num1 !== num2){
        const temp = num1; 
        num1 = num1 % num2; 
        num2 = temp; 
    }

    return num2
}


gcd(24, 12)