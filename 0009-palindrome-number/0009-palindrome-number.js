/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false; // 음수 처리

    const str = x.toString();
    const cnt = parseInt(str.length / 2);
    
    for (let i=0; i<cnt; i++) {
        const a = str.substr(i, 1); // #substr
        const b = str.substr(-1-i, 1);
        if (a !== b) return false;
    }
    
    return true;    
};