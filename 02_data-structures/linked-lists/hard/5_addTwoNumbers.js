class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
}

function addTwoNumbers(head1, head2) {
  let dummy = new Node();
  let res = dummy;
  let total = 0,
    carry = 0;

  while (head1 || head2 || carry) {
    total = carry;

    if (head1) {
      total += head1.val;
      head1 = head1.next;
    }
    if (head2) {
      total += head2.val;
      head2 = head2.next;
    }

    let num = total % 10;
    carry = Math.floor(total / 10);
    dummy.next = new Node(num);
    dummy = dummy.next;
  }

  return res.next;
}

// Test cases for addTwoNumbers function

function runTests() {
  console.log("Running addTwoNumbers tests...");

  // Test 1: Basic addition
  const l1Test1 = createLinkedList([2, 4, 3]); // Represents 342
  const l2Test1 = createLinkedList([5, 6, 4]); // Represents 465
  const resultTest1 = addTwoNumbers(l1Test1, l2Test1);
  console.log(printList(resultTest1)); // Should be 807
   console.log(
    "Test 1:",
    verifyListValues(resultTest1, [7, 0, 8]) ? "PASS" : "FAIL"

  ); // Should be 807

  // Test 2: Different length lists
  const l1Test2 = createLinkedList([9, 9, 9, 9]); // Represents 9999
  const l2Test2 = createLinkedList([9, 9]); // Represents 99
  const resultTest2 = addTwoNumbers(l1Test2, l2Test2);
  console.log(
    "Test 2:",
    verifyListValues(resultTest2, [8, 9, 0, 0, 1]) ? "PASS" : "FAIL"
  ); // Should be 10098

  // Test 3: One empty list
  const l1Test3 = createLinkedList([1, 2, 3]); // Represents 321
  const l2Test3 = null;
  const resultTest3 = addTwoNumbers(l1Test3, l2Test3);
  console.log(
    "Test 3:",
    verifyListValues(resultTest3, [1, 2, 3]) ? "PASS" : "FAIL"
  ); // Should be 321

  // Test 4: Both empty lists
  const resultTest4 = addTwoNumbers(null, null);
  console.log("Test 4:", resultTest4 === null ? "PASS" : "FAIL"); // Should be null

  // Test 5: Addition with carry throughout
  const l1Test5 = createLinkedList([9, 9, 9]); // Represents 999
  const l2Test5 = createLinkedList([1]); // Represents 1
  const resultTest5 = addTwoNumbers(l1Test5, l2Test5);
  console.log(
    "Test 5:",
    verifyListValues(resultTest5, [0, 0, 0, 1]) ? "PASS" : "FAIL"
  ); // Should be 1000

  // Test 6: Zero values
  const l1Test6 = createLinkedList([0]);
  const l2Test6 = createLinkedList([0]);
  const resultTest6 = addTwoNumbers(l1Test6, l2Test6);
  console.log("Test 6:", verifyListValues(resultTest6, [0]) ? "PASS" : "FAIL"); // Should be 0
}

// Helper function to create a linked list from an array of values
function createLinkedList(values) {
  if (!values || values.length === 0) return null;

  const head = new Node(values[0]);
  let current = head;

  for (let i = 1; i < values.length; i++) {
    current.next = new Node(values[i]);
    current = current.next;
  }

  return head;
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

// Helper function to print a linked list (for debugging)
function printList(head) {
  const values = [];
  let current = head;
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  return values.join(" -> ");
}

// Run the tests
runTests();
