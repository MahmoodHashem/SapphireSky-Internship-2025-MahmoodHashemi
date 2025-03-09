

function compress(str) {

    if (!str) return '';
    
    let compressed = '';
    let count = 1;
    let currentChar = str[0];
    
    for (let i = 1; i <= str.length; i++) {
        if (str[i] === currentChar) {
            count++;
        } else {
            compressed += currentChar + (count > 1 ? count : '');
            currentChar = str[i];
            count = 1;
        }
    }
    
    return compressed;
}


// Test cases for compress function
function runTests() {
    // Test 1: Basic compression
    console.log('Test 1:', compress('aabbbcccc') === 'a2b3c4' ? 'PASS' : 'FAIL');

    // Test 2: Single characters
    console.log('Test 2:', compress('abcd') === 'abcd' ? 'PASS' : 'FAIL');

    // Test 3: All same characters
    console.log('Test 3:', compress('aaaaa') === 'a5' ? 'PASS' : 'FAIL');

    // Test 4: Empty string
    console.log('Test 4:', compress('') === '' ? 'PASS' : 'FAIL');

    // Test 5: Mixed repeated and single
    console.log('Test 5:', compress('aaabcd') === 'a3bcd' ? 'PASS' : 'FAIL');

    // Test 6: Numbers in string
    console.log('Test 6:', compress('111222333') === '132333' ? 'PASS' : 'FAIL');
   
}


runTests();
