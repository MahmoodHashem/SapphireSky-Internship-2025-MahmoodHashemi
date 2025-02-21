


function letterChecker(letter){

    if(letter.length > 1) {
        return "Please enter a single letter";
    }

    if(typeof letter !== "string") {
        return "Please enter a string";
    }

    switch (letter) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            return "Vowel";
        default:
            return "constant";
    }
}


console.log(letterChecker("d"));
