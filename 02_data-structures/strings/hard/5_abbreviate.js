function abbreviate(sentence) {
    if (!sentence) return '';
    
    return sentence
        .split(' ')
        .filter(word => word.length > 0)
        .map(word => word[0])
        .join(' ');
}


// Test cases for abbreviate function
function runTests() {
    // Test 1: Basic sentence
    console.log('Test 1:', abbreviate('hello world') === 'h w' ? 'PASS' : 'FAIL');

    // Test 2: Single word
    console.log('Test 2:', abbreviate('hello') === 'h' ? 'PASS' : 'FAIL');

    // Test 3: Multiple words
    console.log('Test 3:', abbreviate('United States America') === 'U S A' ? 'PASS' : 'FAIL');

    // Test 4: Empty string
    console.log('Test 4:', abbreviate('') === '' ? 'PASS' : 'FAIL');

    // Test 5: Multiple spaces
    console.log('Test 5:', abbreviate('hello   world') === 'h w' ? 'PASS' : 'FAIL');

    // Test 6: Special characters
    console.log('Test 6:', abbreviate('$hello @world') === '$ @' ? 'PASS' : 'FAIL');
}


runTests();
