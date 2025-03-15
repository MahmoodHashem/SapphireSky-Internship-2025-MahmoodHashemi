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

  removeDuplicates() {
    let current = this.head;

    while (current) {
      while (current.next && current.next.value === current.value) {
        current.next = current.next.next;
      }
      current = current.next;
    }
    return this;
  }

  printList() {
    const values = [];
    let current = this.head;
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }
    return values.join(" -> ");
  }
}

// Test cases for LinkedList removeDuplicates method

function runTests() {
  console.log("Running LinkedList removeDuplicates tests...");

  // Test 1: List with consecutive duplicates
  const list1 = new LinkedList(1);
  list1.append(1);
  list1.append(2);
  list1.append(3);
  list1.append(3);
  list1.append(3);
  list1.append(4);
  console.log("Original list 1:", list1.printList());
  list1.removeDuplicates();
  console.log("After removing duplicates:", list1.printList());
  console.log(
    "Test 1:",
    list1.printList() === "1 -> 2 -> 3 -> 4" ? "PASS" : "FAIL"
  );

  // Test 2: List with all duplicates
  const list2 = new LinkedList(5);
  list2.append(5);
  list2.append(5);
  list2.append(5);
  console.log("Original list 2:", list2.printList());
  list2.removeDuplicates();
  console.log("After removing duplicates:", list2.printList());
  console.log("Test 2:", list2.printList() === "5" ? "PASS" : "FAIL");

  // Test 3: List with no duplicates
  const list3 = new LinkedList(1);
  list3.append(2);
  list3.append(3);
  list3.append(4);
  console.log("Original list 3:", list3.printList());
  list3.removeDuplicates();
  console.log("After removing duplicates:", list3.printList());
  console.log(
    "Test 3:",
    list3.printList() === "1 -> 2 -> 3 -> 4" ? "PASS" : "FAIL"
  );

  // Test 4: Single element list
  const list4 = new LinkedList(42);
  console.log("Original list 4:", list4.printList());
  list4.removeDuplicates();
  console.log("After removing duplicates:", list4.printList());
  console.log("Test 4:", list4.printList() === "42" ? "PASS" : "FAIL");

  // Test 5: List with non-consecutive duplicates
  const list5 = new LinkedList(1);
  list5.append(2);
  list5.append(1); // Duplicate of first element
  list5.append(3);
  list5.append(2); // Duplicate of second element
  console.log("Original list 5:", list5.printList());
  list5.removeDuplicates();
  console.log("After removing duplicates:", list5.printList());
  // Note: The current implementation only removes consecutive duplicates
  // If it should remove all duplicates, this test would need to be adjusted
  console.log(
    "Test 5:",
    list5.printList() === "1 -> 2 -> 3" ? "PASS" : "FAIL"
  );
}

// Run the tests
runTests();
