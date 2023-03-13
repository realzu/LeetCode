/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const len = needle.length;
    
    for (let i=0; i <= haystack.length - len; i++) {
        const str = haystack.slice(i, i + len);
        if (str === needle) return i;
    }
    
    return -1;
};