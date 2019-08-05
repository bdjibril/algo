/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function (A, B) {
    var intersections = [];
    var i = 0,
        j = 0;

    while ((i < A.length && j < B.length)) {
        // console.log(i,j)
        
        var seg1 = (i<A.length)?A[i]:A[A.length-1];
        var seg2 = (j<B.length)?B[j]:B[B.length-1];
        // console.log(seg1, seg2)

        var itsct = intersection(seg1, seg2);
        if (itsct !== null) {
            intersections.push(itsct);
        }
        // At the end of one list of segment and the next segment starts after
        if ((i >= A.length - 1 && j < B.length - 1  && seg1[1] < B[j + 1][0]) || (j >= B.length - 1 && i < A.length - 1 && seg2[1] < A[i + 1][0])) {
            // console.log("Break")
            break;
        }
        // both segments end at the same value
        if (seg1[1] === seg2[1]) {
            // console.log("c1")
            i++;
            j++;
        } 
        // First segment ends before second segment and second segment is the last one
        else if (seg1[1] < seg2[1] ) {
            // console.log("c2")
            i++;
        } 
        // Second segment ends before first segment and first segment is the last one
        else if (seg2[1] < seg1[1] ) { 
            // console.log("c3")
            j++;
            // console.log(j)
        }
    }

    return intersections;

}
var intersection = function (seg1, seg2) {
    var start = (seg1[0] > seg2[0]) ? seg1[0] : seg2[0],
        end = (seg1[1] < seg2[1]) ? seg1[1] : seg2[1];
    if (start <= end) return [start, end];
    return null;
}


var A = [[0,2],[5,10],[13,23],[24,25]], B = [[1,5],[8,12],[15,24],[25,26]]

// console.log(intervalIntersection(A,B));