function followsPattern(pattern, str) {
    let words = str.split(" ");
    if (pattern.length !== words.length) return false;

    let charToWord = {};
    let wordToChar = {};

    for (let i = 0; i < pattern.length; i++) {
        let char = pattern[i];
        let word = words[i];

        if ((charToWord[char] && charToWord[char] !== word) || 
            (wordToChar[word] && wordToChar[word] !== char)) {
            return false;
        }

        charToWord[char] = word;
        wordToChar[word] = char;
    }

    return true;
}


// Test cases for followsPattern function
function runTests() {
    // Test 1: Basic pattern matching
    console.log('Test 1:', followsPattern('abba', 'dog cat cat dog') === true ? 'PASS' : 'FAIL');

    // Test 2: Different pattern
    console.log('Test 2:', followsPattern('abbc', 'dog cat cat pig') === true ? 'PASS' : 'FAIL');

    // Test 3: Pattern mismatch
    console.log('Test 3:', followsPattern('aaaa', 'dog cat cat dog') === false ? 'PASS' : 'FAIL');

    // Test 4: Length mismatch
    console.log('Test 4:', followsPattern('abba', 'dog cat cat') === false ? 'PASS' : 'FAIL');

    // Test 5: Single character pattern
    console.log('Test 5:', followsPattern('a', 'dog') === true ? 'PASS' : 'FAIL');

    // Test 6: Complex pattern
    console.log('Test 6:', followsPattern('aaab', 'dog dog dog cat') === true ? 'PASS' : 'FAIL');
}


runTests();
