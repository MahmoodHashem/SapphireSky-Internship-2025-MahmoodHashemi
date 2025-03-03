
// Arrow functions are a concise way to write 
// function expressions in JavaScript, introduced in ES6.
//  They provide a shorter syntax and handle
//  the 'this' keyword differently than regular functions.



// Regular Function
function regularGreet(name) {
    return "Hello " + name;
}

// Arrow Function
const arrowGreet = name => "Hello " + name;





// Key differences shown in an object context

const user = {
    name: 'John',
    regularMethod: function() {
        console.log('Outer this:', this.name) // 'this' refers to user object
       
        function innerFunction() {
            
            console.log('Inner this:', this.name) // 'this' is undefined or window
        }
        
        innerFunction()
    }
}

const user2 = {
    name: 'John',
    arrowMethod: function() {
        console.log('Outer this:', this.name) // 'this' refers to user2 object
        
        const innerArrow = () => {
            console.log('Inner this:', this.name) // 'this' still refers to user2 object
        }
        
        innerArrow()
    }
}

let name = 'mahmood'


user.regularMethod()
user2.arrowMethod()