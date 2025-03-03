


function discount(membership){

    const fees = 500; 

    switch(membership.toLowerCase()){
        case 'gold': 
            return fees * 0.5
        case 'silver': 
            return fees * 0.3
        case 'bronze': 
            return fees * 0.1
        default: 
            return "Invalid input"
    }
}
