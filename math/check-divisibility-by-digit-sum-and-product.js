/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    let curr = n;
    let num1 = 0
    let num2 = 1;

    while (curr > 0) {
        const digit = curr % 10
        num1 += digit;
        num2 *= digit;
        curr = Math.floor(curr / 10)
    }

    const newNum = num1 + num2;
    return n % newNum === 0;
    
};