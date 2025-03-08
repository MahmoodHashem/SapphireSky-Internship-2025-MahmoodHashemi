function reverse(str){

    let chars = str.split("")

    let left = 0; 
    let right = str.length - 1

   while(left < right){
    
        [chars[left], chars[right]] = [chars[right], chars[left]]

        left++; 
        right--
   }

    return chars.join("")

}