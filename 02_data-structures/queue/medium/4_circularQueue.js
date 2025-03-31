class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.queue = new Array(capacity);
    this.front = -1;  
    this.rear = -1;   
    this.size = 0;   
  }

  enqueue(element) {
    if (this.isFull()) {
      return false; 
    }
    
    if (this.isEmpty()) {
      this.front = 0;
    }
    
    this.rear = (this.rear + 1) % this.capacity;
    this.queue[this.rear] = element;
    this.size++;
    
    return true;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    
    const element = this.queue[this.front];
    
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.capacity;
    }
    
    this.size--;
    return element;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue[this.front];
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.capacity;
  }

  getSize() {
    return this.size;
  }

  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    
    let result = [];
    let i = this.front;
    
    do {
      result.push(this.queue[i]);
      i = (i + 1) % this.capacity;
    } while (i !== (this.rear + 1) % this.capacity);
    
    console.log(result.join(" <- "));
  }
}
