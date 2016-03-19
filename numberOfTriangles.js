'use strict';

const assert = require('assert');

const numberOfTriangleTypes = (array) => {

    var A = array.sort((a,b) => a-b);

    var n = A.length;
    var acute = 0;
    var right = 0;
    var obtuse = 0;
    
    for(var i = 0; i < n-2; i++){
        for(var j = i+1; j < n-1; j++){
            var k =j +1;
            var lastType = 0;
            while(k < n && (A[i]+A[j]) > A[k] ){

                // apply the cosine laws here and increment the values
                var a = A[i];
                var b = A[j];
                var c = A[k];
                
                // only consider c because its the largest side (should be the right angle)
                var cosC = (b*b + a*a - c*c)/(2*b*a);
                
                if(cosC === 0){
                   right++ 
                } else if(cosC < 0){

                   obtuse++ 
                }
                else {
                    
                    acute++;
                }
                
                k++;
            }
        }
    }
    
    return `${acute} ${right} ${obtuse}`;
};

assert.equal(numberOfTriangleTypes([10,12,3,9,2,15]), "2 1 4", 'number of trianfle types is incorrect');

const testCase2 = "14 16 20 21 29 30 32 34 35 36 41 43 48 54 60 63 64 66 68 72 80 84 85 90 96 105 108 113 115 117 119 124 126 128 135 150 152 156 160 168 171 180 191 195 199 207 210 225 230 231".split(" ").map(Number);

const result2 = numberOfTriangleTypes(testCase2);

assert.equal(result2, "3040 11 5788", `number of triangle types is incorrect : ${result2}    Expected : 3040 11 5788`);

