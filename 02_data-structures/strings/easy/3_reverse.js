function reverse(str){

    let chars = str.split("")

    let l = 0; 
    let r = str.length - 1

   while(l < r){
    
        [chars[l], chars[r]] = [chars[r], chars[l]]

        l++; 
        r--
   }

    return chars.join("")

}