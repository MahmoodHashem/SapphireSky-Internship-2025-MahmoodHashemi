

/* 

** Hoisting is a JavaScript behavior where variable and function declarations are moved to 
** the top of their respective scopes during the compilation phase

*/


console.log(name); // outputs: undefined
var name = "John";

// The above code is interpreted as:
var name;
console.log(name);
name = "John";


// ------------------  Function Hoisting   ------------------------------- 

sayHello(); // outputs: "Hello!"

function sayHello() {
    console.log("Hello!");
}

// The above code is interpreted as:
function sayHello() {
    console.log("Hello!");
}
sayHello();



// --------------- Let and Const Behavior ----------------------------------

console.log(name); // Throws ReferenceError

let name = "John";

// Same applies for const
console.log(age); // Throws ReferenceError
const age = 25;

// The above code is interpreted as:

let name;
console.log(name);
name = "John";

// or 

const age;
console.log(age);
age = 25;

