/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    var pos = 0;
    var result = [
        [strs.shift()]
    ];

    while (strs.length !== 0) {
        var anagram = false;
        for (var i = 0; i < result.length; i++) {
            if (isAnagram(strs[0], result[i][0])) {
                // console.log(strs[0], result[i][0])
                result[i].push(strs.shift());
                anagram = true;
                break;
            }
        }
        if (!anagram) {
            result.push([strs.shift()]);
        }
    }

    return result;
};

var isAnagram = function (txt1, txt2) {
    if (txt1.length !== txt2.length) return false;

    var chars = {};
    for (var i = 0; i < txt1.length; i++) {
        // if (txt2 === "owl" && txt1 === "woo") 
        // console.log("chars", chars);
        if (chars[txt1[i]] === undefined) {
            chars[txt1[i]] = 1;
        } else {
            chars[txt1[i]]++;
        }

    }
    for (var i = 0; i < txt2.length; i++) {
        // if (txt2 === "owl" && txt1 === "woo") 
        // console.log("chars", chars);
        if (chars[txt2[i]] === undefined) {
            return false;
        } else {
            if (chars[txt2[i]] > 1) {

                chars[txt2[i]]--;

            } else {
                delete chars[txt2[i]]
            }
        }
    }

    // if (txt2 === "owl" && txt1 === "woo") 
    console.log("final chars", chars, "isAnagram", txt1, txt2, "==>", Object.keys(chars).length === 0);

    return Object.keys(chars).length === 0;

}

console.log(isAnagram("woo", "owl"))
console.log(isAnagram("pup", "pup"))

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))