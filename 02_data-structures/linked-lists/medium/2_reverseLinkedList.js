class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  append(value){

    const newNode = new Node(value); 

      this.tail.next = newNode;
      this.tail = newNode;
    
  }

  reverse(){

    if(this.head === null || this.head.next === null){
        return;
    }
    
    let current = this.head; 
    let prev = null; 
    let next = current.next; 

    while(current !== null){
        next = current.next; 
        current.next = prev; 
        prev = current; 
        current = next;
    }

    this.head = prev; 
  }
}


// Test cases for LinkedList reverse method

function runTests() {
    console.log("Running LinkedList reverse tests...");
    
    // Test 1: Reverse a list with multiple nodes
    const list1 = new LinkedList(1);
    list1.append(2);
    list1.append(3);
    list1.append(4);
    
    // Store original values for verification
    const originalValues = getListValues(list1);
    console.log('Original list:', originalValues);
    
    list1.reverse();
    const reversedValues = getListValues(list1);
    console.log('Reversed list:', reversedValues);
    
    // Check if values are reversed
    console.log('Test 1.1:', reversedValues[0] === 4 ? 'PASS' : 'FAIL');
    console.log('Test 1.2:', reversedValues[1] === 3 ? 'PASS' : 'FAIL');
    console.log('Test 1.3:', reversedValues[2] === 2 ? 'PASS' : 'FAIL');
    console.log('Test 1.4:', reversedValues[3] === 1 ? 'PASS' : 'FAIL');
    console.log('Test 1.5:', list1.head.value === 4 ? 'PASS' : 'FAIL');
    console.log('Test 1.6:', list1.tail.value === 1 ? 'PASS' : 'FAIL');
    
    // Test 2: Reverse a single node list
    const list2 = new LinkedList(42);
    list2.reverse();
    console.log('Test 2.1:', list2.head.value === 42 ? 'PASS' : 'FAIL');
    console.log('Test 2.2:', list2.tail.value === 42 ? 'PASS' : 'FAIL');
    console.log('Test 2.3:', list2.head.next === null ? 'PASS' : 'FAIL');
    
    // Test 3: Reverse an empty list (edge case)
    const list3 = new LinkedList(1);
    // Make it empty by removing the head
    list3.head = null;
    list3.tail = null;
    list3.length = 0;
    
    // This should handle the empty list gracefully
    list3.reverse();
    console.log('Test 3.1:', list3.head === null ? 'PASS' : 'FAIL');
    console.log('Test 3.2:', list3.tail === null ? 'PASS' : 'FAIL');
    
    // Test 4: Reverse, then reverse again (should get original list)
    const list4 = new LinkedList(1);
    list4.append(2);
    list4.append(3);
    
    const originalList4 = getListValues(list4);
    list4.reverse();
    list4.reverse();
    const doubleReversedList4 = getListValues(list4);
    
    console.log('Test 4:', arraysEqual(originalList4, doubleReversedList4) ? 'PASS' : 'FAIL');
}

// Helper function to get all values in the list as an array
function getListValues(list) {
    const values = [];
    let current = list.head;
    while (current !== null) {
        values.push(current.value);
        current = current.next;
    }
    return values;
}

// Helper function to compare arrays
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

// Run the tests
runTests();
