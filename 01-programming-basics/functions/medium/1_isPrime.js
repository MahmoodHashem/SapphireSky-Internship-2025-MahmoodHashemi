


function isPrime(num){
    
    let counter = 0; 

    for(let i = 2; i < Math.sqrt(num); i++){
        if(num % i === 0) return false; 
    }

    return true; 
}


