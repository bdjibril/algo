/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    if(heights.length === 0) return 0;
    
    var blocks = [ {h: heights[0], p: 0} ];
    var maxArea = 0;
    
    for(var i=1; i < heights.length; i++){
        
        if(heights[i] > blocks[blocks.length -1].h){
            blocks.push({h: heights[i], p: i});    
        } else {
            //console.log(blocks,blocks[blocks.length -1],blocks[blocks.length -1].h)
            var sPos = i;
            while(blocks.length > 0 && heights[i] < blocks[blocks.length -1].h ){
                var val = blocks.pop();
                var area = (i - val.p) * val.h;
                //console.log(i, val, area )
                maxArea = (maxArea > area) ?maxArea :area;
                //sPos--;
                sPos = val.p
            }
            if (blocks.length === 0 || (heights[i] !== blocks[blocks.length -1].h)){
                blocks.push({h: heights[i], p: sPos });
            }
        }
    }
    
    while(blocks.length > 0){
        var val = blocks.pop();
        var area = (heights.length - val.p) * val.h;
        maxArea = (maxArea > area) ?maxArea :area;
    }
    
    return maxArea;
    
};


console.log(largestRectangleArea([2,1,5,6,2,3]))
console.log(largestRectangleArea([1,1]))
console.log(largestRectangleArea([3,6,5,7,4,8,1,0]))