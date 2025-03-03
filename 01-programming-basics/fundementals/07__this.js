

// 'this' refers to the object that is executing the current function 

const person = {
    name: 'John',
    greet() {
        return `Hello, ${this.name}!`
    }
}
// 'this' refers to the person object when called
