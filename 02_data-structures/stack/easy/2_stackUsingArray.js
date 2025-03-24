class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
        return this.items.length;
    }

    pop() {
        if (this.items.length === 0) return null;
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

}