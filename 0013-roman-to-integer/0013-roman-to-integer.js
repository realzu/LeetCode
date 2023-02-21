/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let answer = 0;
    const arr = [...s];
    
    let i = 0;
    while (i < arr.length) {
        switch (arr[i]) {
            case "I":
                if (["V", "X"].includes(arr[i+1])) {
                    answer += arr[i+1] === "V" ? 4 : 9;
                    i++;
                    break;
                }
                answer += 1;
                break;
            case "V":
                answer += 5;
                break;
            case "X":
                if (["L", "C"].includes(arr[i+1])) {
                    answer += arr[i+1] === "L" ? 40 : 90;
                    i++;
                    break;
                }
                answer += 10;
                break;
            case "L":
                answer += 50;
                break;
            case "C":
                if (["D", "M"].includes(arr[i+1])) {
                    answer += arr[i+1] === "D" ? 400 : 900;
                    i++;
                    break;
                }
                answer += 100;
                break;
            case "D":
                answer += 500;
                break;
            default:
                answer += 1000;
                break;
        }
        i++; // switch문 안에서 i++한것과 합쳐짐
    }
    return answer;
};