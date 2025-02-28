

function capitalize(str){

    let words = str.split(" ")

    let capitalized = words.map(word =>{
        return word.charAt(0).toUpperCase() + word.slice(1)
    })

    return capitalized.join(" ")
}

    