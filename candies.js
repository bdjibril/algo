function solution(T) {
    // write your code in JavaScript (Node.js 8.9.4)
    var allCandiesMap = {};
    for (var i = 0; i < T.length; i++) {
        if (allCandiesMap[T[i]] === undefined) {
            allCandiesMap[T[i]] = 1;
        } else {
            allCandiesMap[T[i]] += 1;
        }
    }

    var candiesMap = {};

    // Make map of selected Candies
    var candies = 0;
    var done = false;
    while (!done) {

        for (var candyType in allCandiesMap) {
            if (allCandiesMap.hasOwnProperty(candyType) && allCandiesMap[candyType] > 0) {

                if (candiesMap[candyType] === undefined) {
                    candiesMap[candyType] = 1;
                } else {
                    candiesMap[candyType] += 1;
                }
                allCandiesMap[candyType] -= 1;
                candies++;

                // console.log("Candy Type: ", candyType )
                // console.log("Candies: ", candies )

                if(candies === T.length/2) {
                    done = true;
                    break;
                }
            }
        }
    }

    // console.log(candiesMap);
    // console.log(allCandiesMap);

    return Object.keys(candiesMap).length;
}


console.log(solution([3, 4, 7, 7, 6, 6]));