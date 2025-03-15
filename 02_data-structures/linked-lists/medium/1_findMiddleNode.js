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

  findMiddleNode() {
    // The idea is that if the fast pointer goes as twice as quickly as the slow pointer,
    //  when the fast pointer reaches the end of the list, the slow pointer will be at
    //  the middle of the list.

    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
}
