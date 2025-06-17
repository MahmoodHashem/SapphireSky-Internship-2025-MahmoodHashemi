


// To check if an element is in the array we use includes method 

function includes(element, array){

    for(let i = 0; i < array.length; i++){
        if(array[i] === element){
            return true;
        }
    }

    return false; 
}

// Test cases for includes function
function runTests() {
    const testArray = [1, "hello", true, null, undefined, 42];

    // Test 1: Number search
    console.log('Test 1:', includes(42, testArray) === true ? 'PASS' : 'FAIL');
    console.log('Test 2:', includes(99, testArray) === false ? 'PASS' : 'FAIL');

    // Test 2: String search
    console.log('Test 3:', includes("hello", testArray) === true ? 'PASS' : 'FAIL');
    console.log('Test 4:', includes("world", testArray) === false ? 'PASS' : 'FAIL');

    // Test 3: Boolean search
    console.log('Test 5:', includes(true, testArray) === true ? 'PASS' : 'FAIL');
    
    // Test 4: Special values
    console.log('Test 6:', includes(null, testArray) === true ? 'PASS' : 'FAIL');
    console.log('Test 7:', includes(undefined, testArray) === true ? 'PASS' : 'FAIL');
}

// Run the tests
runTests();

