


function musicController(option){

    switch(option.toLowerCase()){
        case 'play': 
            return "Play the Music"
        case 'pause': 
            return "Pause the Music"
        case 'next': 
            return "Go to the next music"
        case "previous": 
            return "Go to the previous music"
        default: 
            return "Invalid input"
    }
}a