class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 0;
  }

  append(val) {
    let newNode = new Node(val);

    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
    return this;
  }
}

function mergeTwoLists(list1, list2) {
  let dummy = new Node(0);
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  return dummy.next;
}

// Test cases for mergeTwoLists function

function runTests() {
  console.log("Running mergeTwoLists tests...");

  // Test 1: Basic merge of two sorted lists
  const list1A = createLinkedList([1, 3, 5]);
  const list1B = createLinkedList([2, 4, 6]);
  const merged1 = mergeTwoLists(list1A.head, list1B.head);
  console.log(
    "Test 1:",
    verifyListValues(merged1, [1, 2, 3, 4, 5, 6]) ? "PASS" : "FAIL"
  );

  // Test 2: One empty list
  const list2A = createLinkedList([1, 2, 3]);
  const list2B = null;
  const merged2 = mergeTwoLists(list2A.head, list2B);
  console.log(
    "Test 2:",
    verifyListValues(merged2, [1, 2, 3]) ? "PASS" : "FAIL"
  );

  // Test 3: Both empty lists
  const merged3 = mergeTwoLists(null, null);
  console.log("Test 3:", merged3 === null ? "PASS" : "FAIL");

  // Test 4: Lists with duplicate values
  const list4A = createLinkedList([1, 2, 4]);
  const list4B = createLinkedList([1, 3, 4]);
  const merged4 = mergeTwoLists(list4A.head, list4B.head);
  console.log(
    "Test 4:",
    verifyListValues(merged4, [1, 1, 2, 3, 4, 4]) ? "PASS" : "FAIL"
  );

  // Test 5: Lists of different lengths
  const list5A = createLinkedList([1, 3, 5, 7, 9]);
  const list5B = createLinkedList([2, 4]);
  const merged5 = mergeTwoLists(list5A.head, list5B.head);
  console.log(
    "Test 5:",
    verifyListValues(merged5, [1, 2, 3, 4, 5, 7, 9]) ? "PASS" : "FAIL"
  );

  // Test 6: Negative numbers
  const list6A = createLinkedList([-5, -3, 0]);
  const list6B = createLinkedList([-6, -4, -2]);
  const merged6 = mergeTwoLists(list6A.head, list6B.head);
  console.log(
    "Test 6:",
    verifyListValues(merged6, [-6, -5, -4, -3, -2, 0]) ? "PASS" : "FAIL"
  );
}

// Helper function to create a linked list from an array of values
function createLinkedList(values) {
  let list = new LinkedList(values[0]);
  for (let i = 1; i < values.length; i++) {
    list.append(values[i]);
  }
  return list;
}

// Helper function to verify linked list values match expected array
function verifyListValues(head, expectedValues) {
  let current = head;
  let index = 0;

  while (current !== null && index < expectedValues.length) {
    if (current.val !== expectedValues[index]) {
      return false;
    }
    current = current.next;
    index++;
  }

  // Make sure we've reached the end of both the list and expected values
  return current === null && index === expectedValues.length;
}


// Run the tests
runTests();
