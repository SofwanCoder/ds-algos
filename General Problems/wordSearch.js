// 79. Word Search

// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. 
// The same letter cell may not be used more than once.

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true


let dx = [0, 1, 0, -1]
let dy = [1, 0, -1, 0]
let row, col;

function isWordExisting(board, word) {
    let row = board.length
    let col = board[0].length

    for (let i = 0; i < row; i++ ) {
        for (let j = 0; j < col; j++) {
            if (backtrack(i, j, board, word, 0)) 
                return true
        }
    }

    return false
}

function backtrack(i, j, board, word, index) {
    if (index >= word.length) return true

    // console.log(i, j)
    // console.log(board)

    if (!board[i]) return false
    
    if (i < 0 || i >= row || j < 0 || j >= col || board[i][j] !== word.charAt(index))
        return false

    let temp = board[i][j]

    board[i][j] = '#' // mark as visited

    for (let k = 0; k < 4; k++) {
        if (backtrack(i+dx[k], j+dy[k], board, word, index+1))
            return true
    }

    board[i][j] = temp

    return false
}

console.log('Word search result: ', 
            isWordExisting([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCCED'))