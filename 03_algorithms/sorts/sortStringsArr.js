function sortStringsByLengthBucket(arr) {
    if (arr.length <= 1) return arr;
    
    let maxLength = 0;
    for (const str of arr) {
        maxLength = Math.max(maxLength, str.length);
    }
    
    const buckets = new Array(maxLength + 1).fill().map(() => []);
    
    for (const str of arr) {
        buckets[str.length].push(str);
    }
    
    const result = [];
    for (const bucket of buckets) {
        result.push(...bucket);
    }
    
    return result;
}





// Example usage
const strings = ["apple", "banana", "kiwi", "strawberry", "fig", "orange"];
console.log("Original array:", strings);
console.log("Sorted by length (bucket sort):", sortStringsByLengthBucket(strings));
