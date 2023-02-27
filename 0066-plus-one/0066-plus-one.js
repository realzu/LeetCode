/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const last = digits.length - 1;
    digits[last] = digits[last] + 1 === 10 ? 0 : digits[last] + 1;
    let sum = "";
    
    for (let i=last; i>=0; i--) {
        if (i === 0 && digits[i] === 0) digits.unshift(1);
        else if (digits[i] === 0) digits[i-1] = digits[i-1] + 1 === 10 ? 0 : digits[i-1] + 1;
        else break;
    }
    digits.forEach((x) => {
        sum = sum + `${x}`;
    })

    return sum.split("");
};