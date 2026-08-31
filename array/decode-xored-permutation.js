/**
 * @param {number[]} encoded
 * @return {number[]}
res = [0,0,0,0,0,0]
encoded = [6,5,4,6]

possibe choices: 1,2,3,4,5
xor1 ^ xor2 ^ xor3 ^ xor4 ^ xor5 = 1 ^ 2 ^ 3 ^ 4 ^ 5
xor1 ^ xor2 ^ xor3 ^ xor4 ^ xor5 = 1
     6.            4       

     6 ^ 4 ^ xor5 = 1

xo1 ^ xo2 = 6
xo2 ^ xo3 = 5
xo3 ^ xo4 = 4
xo4 ^ xo5 = 6


xo1 ^ xo2 = 6
xo2 ^ xo3 = 5
6 ^ xo1 = 5 ^ xo3
6 ^ 5 = xo1 ^ xo3
3 = xo1 ^ xo3


 */
var decode = function(encoded) {
    const n = encoded.length + 1;
    const res = new Array(n).fill(0);
    let total = 1;
    for (let i = 2; i <=n; i++) {
        total = total ^ i;
    }
    let xorTotal = 0
    for (let i = 0; i < n - 1; i += 2) {
        xorTotal = xorTotal ^ encoded[i]
    }
    res[res.length - 1] = total ^ xorTotal;

    for (let i = n - 2; i >= 0; i--) {
        res[i] = encoded[i] ^ res[i + 1]

    }

    
    return res;   
};