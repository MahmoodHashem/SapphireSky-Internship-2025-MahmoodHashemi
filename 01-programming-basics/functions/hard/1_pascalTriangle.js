/*


Properties of Pascal's Triangle:
 * First and last number in each row is always 1
 * Each number is the sum of two numbers above it
 * Each row represents coefficients in binomial expansion
 * The sum of each row is a power of 2 (1, 2, 4, 8, 16...)
It contains many patterns like:
 * Natural numbers
 * Fibonacci sequence
 * Powers of 11
 * Triangular numbers
 * 
 * 
          1
        1   1
      1   2   1
    1   3   3   1
  1   4   6   4   1
 1  5  10  10  5   1

 

*/


function pascalTriangle(rows) {
    let triangle = [];
    
   
    for(let i = 0; i < rows; i++) {
        let row = [];

        for(let j = 0; j <= i; j++) {
            if(j === 0 || j === i) {
                row.push(1);
            } else {
                row.push(triangle[i-1][j-1] + triangle[i-1][j]);
            }
        }
        triangle.push(row);
    }
    
    return triangle;
}


console.log(pascalTriangle(5));