

function elementOccurences(element, arr){

    let occurences = {}


    for (const element of arr) {
        occurences[element] = (occurences[element] || 0) + 1
    }

    return occurences[element]
}

// Test cases for elementOccurences function
function runTests() {
    // Test 1: Numbers with multiple occurrences
    const test1 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
    console.log('Test 1:', elementOccurences(3, test1) === 3 ? 'PASS' : 'FAIL');
    console.log('Test 2:', elementOccurences(4, test1) === 4 ? 'PASS' : 'FAIL');

    // Test 2: String array
    const test2 = ['apple', 'banana', 'apple', 'cherry', 'apple', 'banana'];
    console.log('Test 3:', elementOccurences('apple', test2) === 3 ? 'PASS' : 'FAIL');
    console.log('Test 4:', elementOccurences('banana', test2) === 2 ? 'PASS' : 'FAIL');

    // Test 3: Mixed types
    const test3 = [1, 'hello', 1, true, 'hello', true, 1];
    console.log('Test 5:', elementOccurences(1, test3) === 3 ? 'PASS' : 'FAIL');
    console.log('Test 6:', elementOccurences(true, test3) === 2 ? 'PASS' : 'FAIL');

    // Test 4: Element not present
    const test4 = [1, 2, 3, 4, 5];
    console.log('Test 7:', elementOccurences(6, test4) === undefined ? 'PASS' : 'FAIL');
}

// Run the tests
runTests();

