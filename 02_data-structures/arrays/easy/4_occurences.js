

function elementOccurences(element, arr){

    const map = {}

    arr.forEach(element => {
        if(map[element]){
            map[element]++
        }else{
            map[element] = 1
        }
    })

    return map[element]

}

