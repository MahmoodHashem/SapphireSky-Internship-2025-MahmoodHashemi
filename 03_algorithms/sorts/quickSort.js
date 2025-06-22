function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        
        quickSort(arr, low, pivotIndex - 1);  // Sort elements before pivot
        quickSort(arr, pivotIndex + 1, high); // Sort elements after pivot
    }
    
    return arr;
}

function partition(arr, low, high) {
    const pivot = arr[high];
    
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    
    return i + 1; }

// Example usage
const array = [10, 7, 8, 9, 1, 5];
console.log("Original array:", array);
console.log("Sorted array:", quickSort(array));
