//Write a function to find all permutations of a given string.

function permute(str) {
    const results = new Set();  // Using Set to handle duplicate permutations

    function backtrack(path, used) {
        if (path.length === str.length) {
            results.add(path.join(''));
            return;
        }
        
        for (let i = 0; i < str.length; i++) {
            if (used[i]) continue;
            
            used[i] = true;
            path.push(str[i]);
            
            backtrack(path, used);
            
            path.pop();
            used[i] = false;
        }
    }

    backtrack([], Array(str.length).fill(false));
    return Array.from(results);
}



// Test cases for permute function
function runTests() {
    // Test 1: Basic three-letter string
    const test1 = permute('abc');
    console.log('Test 1:', arrayEquals(test1.sort(), ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'].sort()) ? 'PASS' : 'FAIL');

    // Test 2: Two-letter string
    const test2 = permute('ab');
    console.log('Test 2:', arrayEquals(test2.sort(), ['ab', 'ba'].sort()) ? 'PASS' : 'FAIL');

    // Test 3: Single character
    const test3 = permute('a');
    console.log('Test 3:', arrayEquals(test3, ['a']) ? 'PASS' : 'FAIL');

    // Test 4: Empty string
    const test4 = permute('');
    console.log('Test 4:', arrayEquals(test4, ['']) ? 'PASS' : 'FAIL');

    // Test 5: Repeated characters
    const test5 = permute('aa');
    console.log('Test 5:', arrayEquals(test5.sort(), ['aa'].sort()) ? 'PASS' : 'FAIL');
}

// Helper function to compare arrays
function arrayEquals(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}


runTests();
