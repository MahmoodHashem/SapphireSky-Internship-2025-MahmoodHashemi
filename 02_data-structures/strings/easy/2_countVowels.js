

function countVowels(str){

    let counter = 0; 

    for(let i = 0; i < str.length; i++){
        if(/[aeiou]/gi.test(str[i])){
            counter++; 
        }
    }

    return counter
}
