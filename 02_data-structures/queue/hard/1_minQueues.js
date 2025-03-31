class MinQueue {
    constructor() {
      this.queue = []; 
      this.minDeque = [];
    }
  
    enqueue(val) {
      this.queue.push(val);
      
      while (
        this.minDeque.length > 0 && 
        this.minDeque[this.minDeque.length - 1] > val
      ) {
        this.minDeque.pop();
      }
      
      this.minDeque.push(val);
    }
   dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      
      const val = this.queue.shift();
      
      if (val === this.minDeque[0]) {
        this.minDeque.shift();
      }
      
      return val;
    }
  
    getMin() {
      if (this.isEmpty()) {
        return null;
      }
      
      return this.minDeque[0];
    }
   isEmpty() {
      return this.queue.length === 0;
    }
  
   size() {
      return this.queue.length;
    }
  }
  