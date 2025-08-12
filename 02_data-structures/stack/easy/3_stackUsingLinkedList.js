class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      let temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.top) return null;

    let temp = this.top;
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;

    this.size--;
    return temp.value;
  }

  peek() {
    return this.top.value;
  }

  printStack() {
    let output = [];
    let current = this.top;
    while (current) {
      output.push(current.value);
      current = current.next;
    }

    return output.join(" -> ");
  }
}



const stack = new Stack();

stack.push(1); 
stack.push(2);
stack.push(3);
stack.push(4);


console.log(stack.printStack())

console.log(stack.peek())

