function pyramid(num) {
    for(let i = 1; i <= num; i++) {
       
        let spaces = ' '.repeat(num - i);
        let stars = '*'.repeat(2 * i - 1);
        
        console.log(spaces + stars);
    }
}


pyramid(5);
