function heapSort(arr) {
    const n = arr.length;
    
    buildMaxHeap(arr);
    
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        
        heapify(arr, 0, i);
    }
    
    return arr;
}

function buildMaxHeap(arr) {
    const n = arr.length;
    
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, i, n);
    }
}

function heapify(arr, i, heapSize) {
    const left = 2 * i + 1;   // Left child
    const right = 2 * i + 2;  // Right child
    let largest = i;          // Initialize largest as root
    
    if (left < heapSize && arr[left] > arr[largest]) {
        largest = left;
    }
    
    if (right < heapSize && arr[right] > arr[largest]) {
        largest = right;
    }
    
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, largest, heapSize);
    }
}

// Example usage
const array = [12, 11, 13, 5, 6, 7];
console.log("Original array:", array);
console.log("Sorted array:", heapSort(array));
