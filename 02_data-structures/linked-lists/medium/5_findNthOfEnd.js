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

  findNthFromLast(n) {
    if (n <= 0 || n > this.length) {
      throw new Error("Invalid value of n");
    }
    let left = this.head;
    let right = this.head;

    while (n > 1 && right.next !== null) {
      right = right.next;
      n--;
    }

    while (right.next !== null) {
      left = left.next;
      right = right.next;
    }

    return left;
  }}

// Test cases for LinkedList findNthFromLast method

function runTests() {
  console.log("Running LinkedList findNthFromLast tests...");

  // Test 1: Find 1st node from end (last node)
  const list1 = new LinkedList(1);
  list1.append(2);
  list1.append(3);
  list1.append(4);
  list1.append(5);
  const result1 = list1.findNthFromLast(1);
  console.log("Test 1:", result1.value === 5 ? "PASS" : "FAIL");

  // Test 2: Find 2nd node from end
  const list2 = new LinkedList(1);
  list2.append(2);
  list2.append(3);
  list2.append(4);
  list2.append(5);
  const result2 = list2.findNthFromLast(2);
  console.log("Test 2:", result2.value === 4 ? "PASS" : "FAIL");

  // Test 3: Find the middle node from end
  const list3 = new LinkedList(1);
  list3.append(2);
  list3.append(3);
  list3.append(4);
  list3.append(5);
  const result3 = list3.findNthFromLast(3);
  console.log("Test 3:", result3.value === 3 ? "PASS" : "FAIL");

  // Test 4: Find the first node (from beginning)
  const list4 = new LinkedList(1);
  list4.append(2);
  list4.append(3);
  list4.append(4);
  list4.append(5);
  const result4 = list4.findNthFromLast(5);
  console.log("Test 4:", result4.value === 1 ? "PASS" : "FAIL");

  // Test 5: Single node list
  const list5 = new LinkedList(42);
  const result5 = list5.findNthFromLast(1);
  console.log("Test 5:", result5.value === 42 ? "PASS" : "FAIL");

  // Test 6: Edge case - n is out of bounds (too large)
  const list6 = new LinkedList(1);
  list6.append(2);
  list6.append(3);
  try {
    const result6 = list6.findNthFromLast(4);
    console.log("Test 6: FAIL - Should have thrown an error");
  } catch (error) {
    console.log("Test 6: PASS - Correctly handled out of bounds");
  }

  // Test 7: Edge case - n is 0 (invalid)
  const list7 = new LinkedList(1);
  list7.append(2);
  list7.append(3);
  try {
    const result7 = list7.findNthFromLast(0);
    console.log("Test 7: FAIL - Should have thrown an error");
  } catch (error) {
    console.log("Test 7: PASS - Correctly handled invalid input");
  }
}

// Run the tests
runTests();
