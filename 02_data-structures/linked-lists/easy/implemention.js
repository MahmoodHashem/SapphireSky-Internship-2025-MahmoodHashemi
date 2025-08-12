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

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  getSize() {
    return this.length;
  }

  findFromLast(index) {
    let left = this.head;
    let right = this.head;

    while (index > 0 && right.next !== null) {
      right = right.next;
      index--;
    }

    while (right.next !== null) {
      left = left.next;
      right = right.next;
    }

    return left;
  }

  remove(value) {
    if (!this.head) {
      return false;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }
      return true;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        this.length--;
        if (current.next === null) {
          this.tail = current;
        }
        return true;
      }
      current = current.next;
    }
    return false;
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

// Test cases for LinkedList implementation

function runTests() {
  console.log("Running LinkedList implementation tests...");

  // Test 1: Constructor and initial state
  const list1 = new LinkedList(5);
  console.log("Test 1.1:", list1.head.value === 5 ? "PASS" : "FAIL");
  console.log("Test 1.2:", list1.tail.value === 5 ? "PASS" : "FAIL");
  console.log("Test 1.3:", list1.length === 1 ? "PASS" : "FAIL");

  // Test 2: Append method
  const list2 = new LinkedList(1);
  list2.append(2).append(3);
  console.log("Test 2.1:", list2.head.value === 1 ? "PASS" : "FAIL");
  console.log("Test 2.2:", list2.tail.value === 3 ? "PASS" : "FAIL");
  console.log("Test 2.3:", list2.length === 3 ? "PASS" : "FAIL");

  // Test 3: Prepend method
  const list3 = new LinkedList(3);
  list3.prepend(2).prepend(1);
  console.log("Test 3.1:", list3.head.value === 1 ? "PASS" : "FAIL");
  console.log("Test 3.2:", list3.tail.value === 3 ? "PASS" : "FAIL");
  console.log("Test 3.3:", list3.length === 3 ? "PASS" : "FAIL");

  // Test 4: getSize method
  const list4 = new LinkedList(1);
  list4.append(2).append(3);
  console.log("Test 4:", list4.getSize() === 3 ? "PASS" : "FAIL");

  // Test 5: Remove method - middle element
  const list5 = new LinkedList(1);
  list5.append(2).append(3);
  const result5 = list5.remove(2);
  console.log("Test 5.1:", result5 === true ? "PASS" : "FAIL");
  console.log("Test 5.2:", list5.length === 2 ? "PASS" : "FAIL");
  console.log("Test 5.3:", list5.head.value === 1 ? "PASS" : "FAIL");
  console.log("Test 5.4:", list5.tail.value === 3 ? "PASS" : "FAIL");

  // Test 6: Remove method - head element
  const list6 = new LinkedList(1);
  list6.append(2).append(3);
  const result6 = list6.remove(1);
  console.log("Test 6.1:", result6 === true ? "PASS" : "FAIL");
  console.log("Test 6.2:", list6.length === 2 ? "PASS" : "FAIL");
  console.log("Test 6.3:", list6.head.value === 2 ? "PASS" : "FAIL");

  // Test 7: Remove method - tail element
  const list7 = new LinkedList(1);
  list7.append(2).append(3);
  const result7 = list7.remove(3);
  console.log("Test 7.1:", result7 === true ? "PASS" : "FAIL");
  console.log("Test 7.2:", list7.length === 2 ? "PASS" : "FAIL");
  console.log("Test 7.3:", list7.tail.value === 2 ? "PASS" : "FAIL");

  // Test 8: Remove method - element not found
  const list8 = new LinkedList(1);
  list8.append(2).append(3);
  const result8 = list8.remove(4);
  console.log("Test 8.1:", result8 === false ? "PASS" : "FAIL");
  console.log("Test 8.2:", list8.length === 3 ? "PASS" : "FAIL");

  // Test 9: Remove method - last element
  const list9 = new LinkedList(1);
  const result9 = list9.remove(1);
  console.log("Test 9.1:", result9 === true ? "PASS" : "FAIL");
  console.log("Test 9.2:", list9.length === 0 ? "PASS" : "FAIL");
  console.log("Test 9.3:", list9.head === null ? "PASS" : "FAIL");
  console.log("Test 9.4:", list9.tail === null ? "PASS" : "FAIL");

  // Test 10: Chaining methods
  const list10 = new LinkedList(1);
  list10.append(2).prepend(0).append(3);
  console.log("Test 10.1:", list10.head.value === 0 ? "PASS" : "FAIL");
  console.log("Test 10.2:", list10.tail.value === 3 ? "PASS" : "FAIL");
  console.log("Test 10.3:", list10.length === 4 ? "PASS" : "FAIL");
}

// runTests();

const myLinkedList = new LinkedList(1);
myLinkedList.append(2).prepend(0);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.append(6);

console.log(myLinkedList.printList());

console.log("nth from end", myLinkedList.findFromLast(6));