


function reverse(arr){

    let left = 0; 
    let right = arr.length - 1; 

    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        
        left++; 
        right--;
    
    }


    return arr
}

// Test cases for reverse function
function runTests() {
    // Test 1: Regular number array
    const test1 = [1, 2, 3, 4, 5];
    const result1 = reverse([...test1]); // Create copy to preserve original
    console.log('Test 1:', JSON.stringify(result1) === JSON.stringify([5, 4, 3, 2, 1]) ? 'PASS' : 'FAIL');

    // Test 2: Array with single element
    const test2 = [42];
    const result2 = reverse([...test2]);
    console.log('Test 2:', JSON.stringify(result2) === JSON.stringify([42]) ? 'PASS' : 'FAIL');

    // Test 3: Array with even length
    const test3 = ['a', 'b', 'c', 'd'];
    const result3 = reverse([...test3]);
    console.log('Test 3:', JSON.stringify(result3) === JSON.stringify(['d', 'c', 'b', 'a']) ? 'PASS' : 'FAIL');

    // Test 4: Mixed type array
    const test4 = [1, 'hello', true, null];
    const result4 = reverse([...test4]);
    console.log('Test 4:', JSON.stringify(result4) === JSON.stringify([null, true, 'hello', 1]) ? 'PASS' : 'FAIL');
}

// Run the tests
runTests();
