/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // Iterate Rows - to find if any duplicates
    for(let i = 0; i < board.length; i++) {
        const set = new Set();
        for(let j = 0; j < board[i].length; j++) {
            const cell = board[i][j];
            if(cell === '.') continue;
            if(set.has(cell)) return false;
            set.add(cell);
        }
    }
    
    // Iterate Columns - to find if any duplicates
    for(let i = 0; i < board.length; i++) {
        const set = new Set();
        for(let j = 0; j < board[i].length; j++) {
            const cell = board[j][i];
            if(cell === '.') continue;
            if(set.has(cell)) return false;
            set.add(cell);
        }
    }
    
    // Iterate 3x3 box - to find if any duplicates
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            
            const set = new Set();
            
            for(let k = 0; k < 3; k++){
                for(let l = 0; l < 3; l++){
                    // where i is number of rows for sub-box [3 x 3] which is 0, 1, and 2
                    // where j is number of columns for sub-box [3 x 3] which is 0, 1, and 2
                    // where k is number of rows for inside the [i][j] sub-box [3 x 3] 
                    // where l is number of columns for inside the [j][i] sub-box [3 x 3]
                    // individual element in the [3 x 3] board the formula would be (3 * i + k) to get the sub-box row and (3 * j + l) to get the sub-box column
                    const cell = board[3 * i + k][3 * j + l];
                    if(cell === '.') continue;
                    if(set.has(cell)) return false;
                    set.add(cell);
                }
            }
        }
    }
    
    return true;
};
// @lc code=end

