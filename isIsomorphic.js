var isIsomorphic = function(s, t) {
    if(s === t) return true;
    if(s.length !== t.length) return false;
    
    var charsMap = {};
    
    for(var i = 0; i < s.length; i++){
        if(charsMap[s[i]] === undefined ){
            charsMap[s[i]] = t[i]
        } else if(charsMap[s[i]] !== t[i]){
            return false;
        }
    }
    
    return true;
};

console.log("Test Passed: ", isIsomorphic("abca", "dced") === true)
console.log("Test Passed: ", isIsomorphic("ab", "ba") === true)
console.log("Test Passed: ", isIsomorphic("aa", "cd") === false)
console.log("Test Passed: ", isIsomorphic("ab", "aa") === true)
console.log("Test Passed: ", isIsomorphic("abcdefghijklmnopqrstuvwxyz", "bcdefghijklmnopqrstuvwxyza") === false) // This is failing
console.log("Test Passed: ", isIsomorphic("abcdefghijklmnopqrstuvwxyz", "bbcdefghijklmnopqrstuvwxyz") === true)

var isIsomorphicNoCollusion = function(s, t) {
    if(s === t) return true;
    if(s.length !== t.length) return false;
    
    var charsMap = {};
    var charInverseMap = {};
    
    for(var i = 0; i < s.length; i++){
        if(charsMap[s[i]] === undefined && charInverseMap[t[i]] === undefined ){
            charsMap[s[i]] = t[i]
            charInverseMap[t[i]] = s[i]
        } else if(charsMap[s[i]] !== t[i] || charInverseMap[t[i]] !== s[i]){
            return false;
        }
    }
    
    return true;
};