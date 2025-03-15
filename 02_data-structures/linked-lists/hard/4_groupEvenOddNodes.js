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


  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  groupEvenOddNodes() {
    if (!this.head || !this.head.next) {
      return this;
    }

    let oddDummy = new Node(0);
    let evenDummy = new Node(0);

    let oddTail = oddDummy;
    let evenTail = evenDummy;

    let current = this.head;

    while (current) {
      if (current.value % 2 === 0) {
        evenTail.next = current;
        evenTail = current;
      } else {
        oddTail.next = current;
        oddTail = current;
      }
      current = current.next;
    }

    evenTail.next = oddDummy.next;
    oddTail.next = null;

    this.head = evenDummy.next;

    this.tail = oddTail;

    return this;
  }
}


// Test cases for LinkedList groupEvenOddNodes method

function runTests() {
    console.log("Running LinkedList groupEvenOddNodes tests...");
    
    // Test 1: Basic even/odd grouping
    const list1 = new LinkedList(1);
    list1.append(2);
    list1.append(3);
    list1.append(4);
    list1.append(5);
    console.log('Original list 1:', getListValues(list1));
    list1.groupEvenOddNodes();
    console.log('After grouping even/odd:', getListValues(list1));
    console.log('Test 1:', arraysEqual(getListValues(list1), [2, 4, 1, 3, 5]) ? 'PASS' : 'FAIL');
    
    // Test 2: All even values
    const list2 = new LinkedList(2);
    list2.append(4);
    list2.append(6);
    list2.append(8);
    console.log('Original list 2:', getListValues(list2));
    list2.groupEvenOddNodes();
    console.log('After grouping even/odd:', getListValues(list2));
    console.log('Test 2:', arraysEqual(getListValues(list2), [2, 4, 6, 8]) ? 'PASS' : 'FAIL');
    
    // Test 3: All odd values
    const list3 = new LinkedList(1);
    list3.append(3);
    list3.append(5);
    list3.append(7);
    console.log('Original list 3:', getListValues(list3));
    list3.groupEvenOddNodes();
    console.log('After grouping even/odd:', getListValues(list3));
    console.log('Test 3:', arraysEqual(getListValues(list3), [1, 3, 5, 7]) ? 'PASS' : 'FAIL');
    
    // Test 4: Single node list
    const list4 = new LinkedList(42);
    console.log('Original list 4:', getListValues(list4));
    list4.groupEvenOddNodes();
    console.log('After grouping even/odd:', getListValues(list4));
    console.log('Test 4:', arraysEqual(getListValues(list4), [42]) ? 'PASS' : 'FAIL');
    
    // Test 5: Empty list (edge case)
    const list5 = new LinkedList(1);
    list5.head = null;
    list5.tail = null;
    list5.length = 0;
    console.log('Original list 5: Empty');
    list5.groupEvenOddNodes();
    console.log('After grouping even/odd: Still Empty');
    console.log('Test 5:', list5.head === null ? 'PASS' : 'FAIL');
    
    // Test 6: Alternating even/odd
    const list6 = new LinkedList(2);
    list6.append(1);
    list6.append(4);
    list6.append(3);
    list6.append(6);
    list6.append(5);
    console.log('Original list 6:', getListValues(list6));
    list6.groupEvenOddNodes();
    console.log('After grouping even/odd:', getListValues(list6));
    console.log('Test 6:', arraysEqual(getListValues(list6), [2, 4, 6, 1, 3, 5]) ? 'PASS' : 'FAIL');
    
    // Test 7: Verify tail pointer is correct
    const list7 = new LinkedList(1);
    list7.append(2);
    list7.append(3);
    list7.append(4);
    list7.groupEvenOddNodes();
    console.log('Test 7.1:', list7.tail.value === 3 ? 'PASS' : 'FAIL');
    console.log('Test 7.2:', list7.tail.next === null ? 'PASS' : 'FAIL');
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
