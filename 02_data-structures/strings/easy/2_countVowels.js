

function countVowels(str){

    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let counter = 0;
    
    for(let char of str) {
        if(vowels.has(char)) {
            counter++;
        }
    }
    
    return counter;
}


// Test cases for countVowels function
function runTests() {
    // Test 1: Basic word with mixed vowels
    console.log('Test 1:', countVowels('hello') === 2 ? 'PASS' : 'FAIL');

    // Test 2: All vowels
    console.log('Test 2:', countVowels('aeiou') === 5 ? 'PASS' : 'FAIL');

    // Test 3: No vowels
    console.log('Test 3:', countVowels('rhythm') === 0 ? 'PASS' : 'FAIL');

    // Test 4: Empty string
    console.log('Test 4:', countVowels('') === 0 ? 'PASS' : 'FAIL');

    // Test 5: Mixed case vowels
    console.log('Test 5:', countVowels('AeIoU') === 5 ? 'PASS' : 'FAIL');

    // Test 6: Long sentence
    console.log('Test 6:', countVowels('The quick brown fox jumps over the lazy dog') === 11 ? 'PASS' : 'FAIL');
}

runTests();
