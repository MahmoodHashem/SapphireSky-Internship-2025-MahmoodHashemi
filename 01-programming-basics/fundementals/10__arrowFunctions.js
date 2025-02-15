// 1. Basic Syntax Comparison



// Traditional function
function traditionalAdd(a, b) {
    return a + b;
}

// Arrow function - shorter syntax
const arrowAdd = (a, b) => a + b;

// 2. Single Parameter - parentheses optional
const square = x => x * x;

// 3. Multiple lines - requires curly braces and return
const multiply = (a, b) => {
    const result = a * b;
    return result;
};

// 4. 'this' context demonstration
const counter = {
    count: 0,
    // Regular function creates new 'this' context
    regularIncrement: function() {
        setTimeout(function() {
            this.count++;
            console.log(this.count);
        }, 1000);
    },
    // Arrow function inherits 'this' from parent scope
    arrowIncrement: function() {
        setTimeout(() => {
            this.count++;
            console.log(this.count);
        }, 1000);
    }
};

// 5. Implicit Return Examples
const numbers = [1, 2, 3, 4];
// One-liner with implicit return
const doubled = numbers.map(num => num * 2);
// Multiple lines requires explicit return
const filtered = numbers.filter(num => {
    return num > 2;
});
