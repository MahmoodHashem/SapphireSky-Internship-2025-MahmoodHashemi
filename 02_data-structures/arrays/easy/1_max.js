

function max(arr){

    let max = arr[0]; 

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > max){
            max = arr[i]
        }
    }

    return max
}

// Test cases for max function
function runTests() {
    
    const test1 = [1, 5, 3, 9, 2];
    console.log('Test 1:', max(test1) === 9 ? 'PASS' : 'FAIL');


    const test2 = [42];
    console.log('Test 2:', max(test2) === 42 ? 'PASS' : 'FAIL');

    
    const test3 = [5, 5, 5, 5];
    console.log('Test 3:', max(test3) === 5 ? 'PASS' : 'FAIL');

  
    const test4 = [-1, -5, -2, -8];
    console.log('Test 4:', max(test4) === -1 ? 'PASS' : 'FAIL');

    const test5 = [-10, 5, -3, 8, -2];
    console.log('Test 5:', max(test5) === 8 ? 'PASS' : 'FAIL');
}

// Run the tests
runTests();



// or

const  largest = arr => Math.max(...arr)