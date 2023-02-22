/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) return strs[0];
    
    let arr = [...strs[0]];
    let prefix = [];
    
    for (let i=1; i<strs.length; i++) {
        let newStr = [...strs[i]];
        if (prefix.length > 0) {
            arr = [...prefix];
            prefix = [];
        }
        else if (i !== 1) return "";
        
        for (let j=0; j<arr.length; j++) {
            if (arr[j] === newStr[j]) {
                prefix.push(arr[j]);
            }
            else break;            
        }
    }
    return prefix.length > 0 ? prefix.join("") : "";
};