
/**
 * We can use binary search to efficiently find the square root:
 * Define a search range from 0 to the input number (or half of it, since the square root can't be larger than n/2 for n > 4)
 * In each step, calculate the middle value and check if its square is equal to, less than, or greater than the input number
 * Adjust the search range accordingly
 * Continue until we find the exact square root or the search range narrows down to the floor value
 */


function mySqrt(x) {
    if (x === 0 || x === 1) {
        return x;
    }
    
    let left = 1;
    let right = Math.floor(x / 2) + 1; 
    let result = 0;
    
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        
        const midSquared = mid * mid;
        
        if (midSquared === x) {
            return mid;
        } else if (midSquared < x) {
            left = mid + 1;
            result = mid;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
}

// Example usage
console.log(mySqrt(4));  
console.log(mySqrt(8));  
console.log(mySqrt(9));  
console.log(mySqrt(16)); 
console.log(mySqrt(25));
 console.log(mySqrt(26)); 
