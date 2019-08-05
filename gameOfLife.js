
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    var newBoard = [];

    for (var i = 0; i < board.length; i++) {
        newBoard[i] = [];
        for (var j = 0; j < board[i].length; j++) {
            //if live
            if (board[i][j] === 1) {
                console.log(i, j, countNeighbors(i, j, board), 'live?', !(countNeighbors(i, j, board) < 2 || countNeighbors(i, j, board) > 3));
                if (countNeighbors(i, j, board) < 2 || countNeighbors(i, j, board) > 3) {
                    newBoard[i][j] = 0;
                } else {
                    newBoard[i][j] = 1;
                }

            } else {
                if (countNeighbors(i, j, board) === 3) {
                    newBoard[i][j] = 1;
                } else {
                    newBoard[i][j] = 0;
                }
            }
        }
    }

    console.log(newBoard)

    return newBoard;

};

var countNeighbors = function (i, j, b) {
    var count = 0;
    if (i > 0) {
        //L
        count += b[i - 1][j];
        if (j > 0) {
            //TL
            count += b[i - 1][j - 1];
        }
        if (j < b[i].length - 1) {
            //BL
            count += b[i - 1][j + 1];
        }
    }
    if (j < b[i].length - 1) {
        //B
        count += b[i][j + 1];
        if (i < b.length - 1) {
            //BR
            count += b[i + 1][j + 1];
        }
    }
    if (j > 0) {
        //T
        count += b[i][j - 1];
        if (i < b.length - 1) {
            //TR
            count += b[i + 1][j - 1];
        }
    }
    if (i < b.length - 1) {
        //R
        count += b[i + 1][j];
    }

    return count;

}