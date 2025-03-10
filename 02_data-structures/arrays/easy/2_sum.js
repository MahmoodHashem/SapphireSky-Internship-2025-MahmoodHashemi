
function sum(arr) {
   let total = 0; 


   for (let i = 0; i < arr.length; i++) {
     total += arr[i];
    
   }

   return total; 
}

// Test cases for sum function
function runTests() {
    // Test 1: Regular positive numbers
    const test1 = [1, 2, 3, 4, 5];
    console.log('Test 1:', sum(test1) === 15 ? 'PASS' : 'FAIL');

    // Test 2: Array with single element
    const test2 = [42];
    console.log('Test 2:', sum(test2) === 42 ? 'PASS' : 'FAIL');

    // Test 3: Array with zeros
    const test3 = [0, 0, 0, 0];
    console.log('Test 3:', sum(test3) === 0 ? 'PASS' : 'FAIL');

    // Test 4: Array with negative numbers
    const test4 = [-1, -2, -3];
    console.log('Test 4:', sum(test4) === -6 ? 'PASS' : 'FAIL');

    // Test 5: Mixed positive and negative numbers
    const test5 = [-10, 5, -3, 8, -2];
    console.log('Test 5:', sum(test5) === -2 ? 'PASS' : 'FAIL');
}

// Run the tests
runTests();
