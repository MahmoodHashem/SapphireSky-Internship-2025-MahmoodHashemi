function Stack() {
  let stack = [];

  function enqueue(element) {
    stack.push(element);
  }

  function dequeue() {
    stack.pop();
  }

  function peek() {
    return stack[stack.length - 1];
  }

  function isEmpty() {
    return stack.length === 0;
  }

  return {
    enqueue,
    dequeue,
    peek,
    isEmpty,
  };

}

const stack = new Stack(); 


stack.enqueue(1); 
stack.enqueue(2);
stack.enqueue(3);


console.log(stack.peek()); 
