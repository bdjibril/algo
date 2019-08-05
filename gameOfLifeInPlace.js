/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {

    for (var i = 0; i < board.length; i++) {

        for (var j = 0; j < board[i].length; j++) {
            //if live
            if (board[i][j] === 1) {
                //console.log(i, j, countNeighbors(i, j, board), 'live?', !(countNeighbors(i, j, board) < 2 || countNeighbors(i, j, board) > 3));
                if (countNeighbors(i, j, board) < 2 || countNeighbors(i, j, board) > 3) {
                    board[i][j] = 4;
                } else {
                    board[i][j] = 5;
                }

            } else {
                if (countNeighbors(i, j, board) === 3) {
                    board[i][j] = 3;
                } else {
                    board[i][j] = 2;
                }
            }
        }
    }

    for (var i = 0; i < board.length; i++) {

        for (var j = 0; j < board[i].length; j++) {
            board[i][j] = (board[i][j] === 2 || board[i][j] === 4) ? 0 : 1;
        }
    }

    console.log(board)


};

var countNeighbors = function (ci, cj, b) {
    var count = 0;
    for (var i = ci - 1; i <= ci + 1; i++) {
        for (var j = cj - 1; j <= cj + 1; j++) {
            if (i < 0 || i >= b.length || j < 0 || j >= b[0].length) {
                continue;
            }
            // not out of bound
            if (ci !== i || cj !== j) {
                // only care about the neighbors
                count += (b[i][j] === 1 || b[i][j] === 4 || b[i][j] === 5) ? 1 : 0;
            }


        }
    }

    return count;
}



console.log(gameOfLife([
    [0, 1, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 1, 0, 0]
]))