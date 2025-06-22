

function capitalize(str){

    if(!str.length) return ""

    let words = str.split(" ")

    let capitalized = words.map(word =>{
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })

    return capitalized.join(" ")
}

    

// Test cases for capitalize function
function runTests() {
    // Test 1: Basic sentence
    console.log('Test 1:', capitalize('hello world') === 'Hello World' ? 'PASS' : 'FAIL');

    // Test 2: Already capitalized
    console.log('Test 2:', capitalize('Hello World') === 'Hello World' ? 'PASS' : 'FAIL');

    // Test 3: Single word
    console.log('Test 3:', capitalize('javascript') === 'Javascript' ? 'PASS' : 'FAIL');

    // Test 4: Multiple spaces
    console.log('Test 4:', capitalize('the  quick  brown') === 'The  Quick  Brown' ? 'PASS' : 'FAIL');

    // Test 5: Mixed case
    console.log('Test 5:', capitalize('tHe QuIcK bRoWn') === 'The Quick Brown' ? 'PASS' : 'FAIL');

    // Test 6: Empty string
    console.log('Test 6:', capitalize('') === '' ? 'PASS' : 'FAIL');
}


runTests();
