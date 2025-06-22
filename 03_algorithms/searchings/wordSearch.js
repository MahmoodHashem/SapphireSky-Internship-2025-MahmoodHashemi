
function exist(board, word) {
    if (!board || board.length === 0 || !word) {
        return false;
    }

    const rows = board.length;
    const cols = board[0].length;

    function dfs(row, col, index) {
        if (index === word.length) {
            return true;
        }

        if (row < 0 || row >= rows || col < 0 || col >= cols ||
            board[row][col] !== word[index]) {
            return false;
        }

        const temp = board[row][col];
        board[row][col] = '#';

        const found = dfs(row + 1, col, index + 1) ||
            dfs(row - 1, col, index + 1) ||
            dfs(row, col + 1, index + 1) ||
            dfs(row, col - 1, index + 1) ||
            dfs(row + 1, col + 1, index + 1) ||
            dfs(row - 1, col - 1, index + 1) ||
            dfs(row + 1, col - 1, index + 1) ||
            dfs(row - 1, col + 1, index + 1); 

        board[row][col] = temp;

        return found;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === word[0] && dfs(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
}

// Example usage
const grid = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
];

console.log(exist(grid, "ABCCED")); // true
console.log(exist(grid, "SEE")); // true
console.log(exist(grid, "ABCB")); // false
