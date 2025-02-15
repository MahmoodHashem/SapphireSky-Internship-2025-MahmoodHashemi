
// closure is a function that has access to variables in the outer scope
// even after the outer function has returned


// for example
function outer() {
    let count = 0;
    return function() {
        return count++;
    }
}


const counter = outer(); // counter maintains access to count variable


