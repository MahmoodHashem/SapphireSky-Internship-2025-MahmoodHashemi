
function findDuplicatesBySorting(arr) {
    const sorted = [...arr].sort((a, b) => a - b);
    const d = [];
    
    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] === sorted[i - 1] && 
            (d.length === 0 || d[d.length - 1] !== sorted[i])) {
            d.push(sorted[i]);
        }
    }
    
    return d;
}




// Example usage
const array1 = [1, 2, 3, 1, 3, 6, 5, 4, 3, 2];
console.log("Duplicates:", findDuplicatesBySorting(array1)); 

const array2 = [1, 2, 3, 4, 5];
console.log("Duplicates:", findDuplicatesBySorting(array2)); 
