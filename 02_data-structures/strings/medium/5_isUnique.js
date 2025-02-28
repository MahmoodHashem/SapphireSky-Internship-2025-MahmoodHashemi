

function isUnique(str){

    let occurrences = {}

    for (const char of str) {
        occurrences[char] = (occurrences[char] || 0) + 1
    }

    let unique = Object.entries(occurrences).every(([char, count]) =>{
        return count === 1
    })

    return unique

}
