export default function descendingSort(arr) {
    const n = arr.length;
    
    let swapped;
    
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        
        if (!swapped) {
            break;
        }
    }
    
    return arr;
}

// Example usage
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", array);
console.log("Sorted array:", descendingSort(array));
