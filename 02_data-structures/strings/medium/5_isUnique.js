

function isUnique(str){

    let occurrences = {}

    for (const char of str) {
        occurrences[char] = (occurrences[char] || 0) + 1
    }

    let unique = Object.entries(occurrences).every(([char, count]) =>{
        return count === 1
    })

    return unique

}


// Test cases for isUnique function
function runTests() {
    // Test 1: String with all unique characters
    console.log('Test 1:', isUnique('abcdef') === true ? 'PASS' : 'FAIL');

    // Test 2: String with repeating characters
    console.log('Test 2:', isUnique('hello') === false ? 'PASS' : 'FAIL');

    // Test 3: Empty string
    console.log('Test 3:', isUnique('') === true ? 'PASS' : 'FAIL');

    // Test 4: Single character
    console.log('Test 4:', isUnique('a') === true ? 'PASS' : 'FAIL');

    // Test 5: Special characters
    console.log('Test 5:', isUnique('!@#$%') === true ? 'PASS' : 'FAIL');

    // Test 6: Numbers and letters
    console.log('Test 6:', isUnique('a1b2c3') === true ? 'PASS' : 'FAIL');
}


runTests();
