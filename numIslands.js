/**
 * @param {character[][]} grid
 * @return {number}
 */

var visited = [];
var numIslands = function (grid) {
    var numIsl = 0;

    for (var i = 0; i < grid.length; i++) {
        //console.log(i,j, visited)
        for (var j = 0; j < grid[i].length; j++) {
            //console.log((visited[i] === undefined || visited[i][j] !== true) , grid[i][j] === "1",i,j,grid[i][j] )
            if ((visited[i] === undefined || visited[i][j] !== true) && grid[i][j] === "1") {
                numIsl++;
                //console.log(numIsl,i,j)
                visitIslFromPosition(i, j, grid)
            }
        }
    }

    return numIsl;

};

var visitIslFromPosition = function (i, j, grid) {
    if ((visited[i] !== undefined && visited[i][j] === true)) {
        return;
    }

    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) {
        return;
    }

    //console.log('visited',visited)
    //console.log('grid',grid)

    if (visited[i] === undefined) visited[i] = [];

    visited[i][j] = true;

    if (grid[i][j] === "1") {
        //visitTop
        visitIslFromPosition(i - 1, j, grid)

        //visitLeft
        visitIslFromPosition(i, j - 1, grid)

        //visitBottom
        visitIslFromPosition(i + 1, j, grid)

        //VisitRight
        visitIslFromPosition(i, j + 1, grid)
    }

}


console.log(numIslands(
    [
        ["1","1","0","0","0"],
        ["1","1","0","0","0"],
        ["0","0","1","0","0"],
        ["0","0","0","1","1"]
    ]
))

/*

numIsl = 0
visited = []

numIslands = (grid) =>

    for i->l
      for j->l
         if(not visited[i,j] && val == 1)
            numIsl++
            visitIslFromPosition(i,j)
        

visitIslFromPosition (i,j) =>
    // error case
    if i < 0 or i >= rows || j<0 || j>=cols
       return

    if visited[i] is undefined
        visited[i] = []
        
    visited[i][j] = true
    
    //visitTop
    visitIslFromPosition(i-1,j)
    
    //visitLeft
    visitIslFromPosition(i, j-1)
    
    //visitBottom
    visitIslFromPosition(i+1, j)
    
    //VisitRight
    visitIslFromPosition(i, j+1)
*/