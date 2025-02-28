

function isRotated(str, goal){


    if(str.length !== goal.length) return false; 


    let doubleStr = str + str

    return doubleStr.includes(goal); 

}