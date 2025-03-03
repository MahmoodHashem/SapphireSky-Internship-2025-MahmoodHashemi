

function fibonacci(num){
 s
    let first = 0; 
    let second = 1; 

    if(num === 0) return first;
    if(num === 1) return second;

    for(let i = 2; i <= num; i++){
        let next = first + second;
        first = second;
        second = next;
    }

    return second
}





