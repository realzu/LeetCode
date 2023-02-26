/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const arr = s.split(" ").reverse();
    for (let i=0; i<arr.length; i++) {
        if (arr[i] !== "") return arr[i].length;
    }
};