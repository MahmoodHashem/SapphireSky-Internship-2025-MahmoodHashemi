

function isRotated(str, goal){


    if(str.length !== goal.length) return false; 

    if(str === goal) return true;

    let doubleStr = str + str

    return doubleStr.includes(goal); 

}


// Test cases for isRotated function
function runTests() {
    // Test 1: Basic rotation
    console.log('Test 1:', isRotated('hello', 'llohe') === true ? 'PASS' : 'FAIL');

    // Test 2: No rotation
    console.log('Test 2:', isRotated('hello', 'hello') === true ? 'PASS' : 'FAIL');

    // Test 3: Different strings
    console.log('Test 3:', isRotated('hello', 'world') === false ? 'PASS' : 'FAIL');

    // Test 4: Different lengths
    console.log('Test 4:', isRotated('hello', 'hell') === false ? 'PASS' : 'FAIL');

    // Test 5: Empty strings
    console.log('Test 5:', isRotated('', '') === true ? 'PASS' : 'FAIL');

    // Test 6: Single character
    console.log('Test 6:', isRotated('a', 'a') === true ? 'PASS' : 'FAIL');
}


runTests();
