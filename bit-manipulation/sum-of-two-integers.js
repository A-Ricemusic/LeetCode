/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let res = [];
    let carry = 0;
    for (let i = 0; i < 32; i++) {
        let c1 = 0;
        let c2 = 0;
        if (a & 1 === 1) {
            c1 = 1;
        }
        if (b & 1 === 1) {
            c2 = 1;
        }
        a = a >> 1;
        b = b >> 1;
        

        if (c1 === 1 && c2 === 1) {
            if (carry === 1) {
                res.push("1");
            } else {
                res.push("0");
            }
            carry = 1
        } else if (c1 === 1 || c2 === 1) {
            if (carry === 1) {
                res.push("0");
            } else {
                res.push("1")
            }
        } else {
            if (carry === 1) {
                res.push("1")
                carry = 0
            } else {
                res.push(0)
            }
        }
    }

    let ans = res.reverse().join("")
    return parseInt(ans, 2)
};