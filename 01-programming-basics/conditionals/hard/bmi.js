

function bmi(weight, height){
    if(isNaN(weight) || isNaN(height)) return "Invalid input";

    let bmi = weight / (height * height);
    return bmi;
}


function bmiCategory(bmi){
    if(bmi < 18.5){
        return "Underweight";
    }else if(bmi >= 18.5 && bmi < 25){
        return "Normal";
    }else if(bmi >= 25 && bmi < 30){
        return "Overweight";
    }else{
        return "Obese";
    }
}
