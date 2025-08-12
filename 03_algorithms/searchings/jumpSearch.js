
function jumpSearch(arr, target) {
    const n = arr.length;
    
    if (n === 0) {
        return -1;
    }
    
   const step = Math.floor(Math.sqrt(n));
    
    let prev = 0;
    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        step += Math.floor(Math.sqrt(n));
        
        if (prev >= n) {
            return -1;
        }
    }
    
    while (arr[prev] < target) {
        prev++;
        
        if (prev === Math.min(step, n)) {
            return -1;
        }
    }
    
    if (arr[prev] === target) {
        return prev;
    }
    
    return -1; 
}

// Example usage
const sortedArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];
const target = 55;
const result = jumpSearch(sortedArray, target);
