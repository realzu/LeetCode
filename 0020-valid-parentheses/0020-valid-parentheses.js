/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const arr = [...s];
    const stack = [];
    
    let i = 0;
    while (i < arr.length) {
        let str = arr[i];
        if (['(', '{', '['].includes(str)) stack.push(str);
        else {
            let char = stack.pop();
            if ((str === ')' && char !== '(') || (str === '}' && char !== '{') || (str === ']' && char !== '[')) return false;
        }
        i++;
    }
    
    return stack.length > 0 ? false : true;
};