function countingSort(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const range = max - min + 1;
    
    const count = new Array(range).fill(0);
    
    for (let i = 0; i < arr.length; i++) {
        count[arr[i] - min]++;
    }
    
    for (let i = 1; i < range; i++) {
        count[i] += count[i - 1];
    }
    
    const output = new Array(arr.length);
    
    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i] - min] - 1] = arr[i];
        count[arr[i] - min]--;
    }
    
    return output;
}

// Example usage
const array = [4, 2, 2, 8, 3, 3, 1];
console.log("Original array:", array);
console.log("Sorted array:", countingSort(array));
