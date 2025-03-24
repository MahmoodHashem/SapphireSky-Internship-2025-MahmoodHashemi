
class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(x) {
        this.stack.push(x);
        if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(x);
        }
    }

    pop() {
        if (this.stack.length === 0) return null;
        const top = this.stack.pop();
        if (top === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
        return top;
    }

    top() {
        if (this.stack.length === 0) return null;
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        if (this.minStack.length === 0) return null;
        return this.minStack[this.minStack.length - 1];
    }
}
