

function smallest(arr){

    let min = arr[0]; 

    for (let i = 0; i < arr.length; i++) {
      
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return min

}


// Test cases for smallest function
function runTests() {
    // Test 1: Regular positive numbers
    const test1 = [5, 3, 9, 1, 7];
    console.log('Test 1:', smallest(test1) === 1 ? 'PASS' : 'FAIL');

    // Test 2: Array with single element
    const test2 = [42];
    console.log('Test 2:', smallest(test2) === 42 ? 'PASS' : 'FAIL');

    // Test 3: Array with repeated numbers
    const test3 = [5, 5, 5, 5];
    console.log('Test 3:', smallest(test3) === 5 ? 'PASS' : 'FAIL');

    // Test 4: Array with negative numbers
    const test4 = [-1, -5, -2, -8];
    console.log('Test 4:', smallest(test4) === -8 ? 'PASS' : 'FAIL');

    // Test 5: Mixed positive and negative numbers
    const test5 = [-10, 5, -3, 8, -2];
    console.log('Test 5:', smallest(test5) === -10 ? 'PASS' : 'FAIL');
}

// Run the tests
runTests();
