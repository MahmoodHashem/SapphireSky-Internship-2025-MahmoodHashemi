function getZodiacSign(month, day) {

    switch (month) {
        case 1: 
            return day > 19 ? "Aquarius" :  "Capricorn"
        case 2: 
            return day > 18 ? "Pisces" : "Aquarius"
        case 3: 
            return day > 20 ? "Aries" : "Pisces"
        case 4: 
            return day > 19 ? "Taurus" : "Aries"
        case 5: 
            return day > 20 ? "Gemini" : "Taurus"
        case 6: 
            return day > 20 ? "Cancer" : "Gemini"
        case 7: 
            return day > 22 ? "Leo" : "Cancer"
        case 8: 
            return day > 22 ? "Virgo" : "Leo"
        case 9: 
            return day > 22 ? "Libra" : "Virgo"
        case 10: 
            return day > 22 ? "Scorpio" : "Libra"
        case 11: 
            return day > 21 ? "Sagittarius" : "Scorpio"
        case 12: 
            return day > 21 ? "Capricorn" : "Sagittarius"
        default: 
            "Invalid Input"
    }
}

