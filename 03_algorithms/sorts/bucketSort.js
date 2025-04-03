function bucketSort(arr, bucketSize = 5) {
    if (arr.length === 0) {
        return arr;
    }
    
    let minValue = arr[0];
    let maxValue = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        } else if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    const buckets = new Array(bucketCount);
    
    for (let i = 0; i < bucketCount; i++) {
        buckets[i] = [];
    }
    
    for (let i = 0; i < arr.length; i++) {
        const bucketIndex = Math.floor((arr[i] - minValue) / bucketSize);
        buckets[bucketIndex].push(arr[i]);
    }
    
    const sortedArray = [];
    for (let i = 0; i < bucketCount; i++) {
        buckets[i].sort((a, b) => a - b);
        sortedArray.push(...buckets[i]);
    }
    
    return sortedArray;
}

// Example usage
const array = [0.42, 0.32, 0.33, 0.52, 0.37, 0.47, 0.51];
console.log("Original array:", array);
console.log("Sorted array:", bucketSort(array));