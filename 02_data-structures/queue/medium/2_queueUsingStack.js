class QueueUsingStacks {
  constructor() {
    this.stackNewest = [];
    this.stackOldest = [];
    this.size = 0;
  }
 
  enqueue(value) {
    this.stackNewest.push(value);
    this.size++;
    return this.size;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    this.shiftStacks();

    this.size--;
    return this.stackOldest.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    this.shiftStacks();

    return this.stackOldest[this.stackOldest.length - 1];
  }

  shiftStacks() {
    if (this.stackOldest.length === 0) {
      while (this.stackNewest.length > 0) {
        this.stackOldest.push(this.stackNewest.pop());
      }
    }
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  clear() {
    this.stackNewest = [];
    this.stackOldest = [];
    this.size = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }

    const oldestCopy = [...this.stackOldest];
    const newestCopy = [...this.stackNewest];

    let result = [];

    // Add elements from oldest stack (front of queue)
    while (oldestCopy.length > 0) {
      result.push(oldestCopy.pop());
    }

    // Add elements from newest stack (back of queue)
    const tempStack = [];
    while (newestCopy.length > 0) {
      tempStack.push(newestCopy.pop());
    }
    while (tempStack.length > 0) {
      result.push(tempStack.pop());
    }

    return result.join(" <- ");
  }
}
