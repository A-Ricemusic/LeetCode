/**
 * @param {number} a
 * @param {number} b
 * @return {number}
  100 => 4
  001 => 1
  011
 */
var subtract = function(a,b) {
    let res = [];
    let borrow = 0;
    if (a < b) {
        const tmp = a;
        a = b;
        b = tmp;
    }
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
            if (borrow  === 1) {
                res.push("1")
            } else {
                res.push("0");
            }
        } else if (c1 === 1 && c2 === 0) {
            if (borrow === 1) {
                res.push("0")
                borrow = 0;
            } else {
                res.push("1")
            }
        } else if (c1 === 0 && c2 === 1) {
            if (borrow === 1) {
                res.push("1");
                borrow = 1;
            } else {
                res.push("1");
                borrow = 1;
            }
        } else if (c1 === 0 && c2 === 0) {
            if (borrow === 1) {
                res.push("1");
            } else {
                res.push("0");
            }
        }
    }

    let ans = res.reverse().join("")
    return parseInt(ans, 2)
}



var add = function(a,b) {
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
}

var getSum = function(a, b) {
    if (a < 0 && b < 0) {
        let res = add(Math.abs(a), Math.abs(b));
        res *= -1
        return res;
    } else if (a > 0 && b > 0) {
        return add(Math.abs(a), Math.abs(b));
    } else if (a === 0) {
        return b;
    } else if (b === 0) {
        return a;
    } else if (a > 0 && b < 0) {
        let res = subtract(Math.abs(a), Math.abs(b))
        if (Math.abs(a) < Math.abs(b)) {
            res *= -1
        }
        return res;
    } else if (a < 0 && b > 0) {
        let res = subtract(Math.abs(a), Math.abs(b))
        if (Math.abs(b) < Math.abs(a)) {
            res *= -1
        }
        return res;

    }
    
};