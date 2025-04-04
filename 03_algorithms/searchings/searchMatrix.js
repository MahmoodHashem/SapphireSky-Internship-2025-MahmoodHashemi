
function containsMatrix(matrix, target) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === target) {
                return true;
            }
        }
    }
    
    return false;
}

// Example usage
const matrix = [
    [1, 3, 5],
    [7, 9, 11],
    [13, 15, 17]
];

console.log(searchMatrix(matrix, 9));  // true
console.log(searchMatrix(matrix, 8));  // false
