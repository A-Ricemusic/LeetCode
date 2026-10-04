/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}

 */
var sortJumbled = function(mapping, nums) {
    const map = new Map();

    for (let num of nums) {
        let newNum = 0;
        if (num === 0) {
            newNum = mapping[num];
            if (!map.has(newNum)) map.set(newNum, []);
            map.get(newNum).push(num);
            continue;
        }
        let mult = 1;
        const tmp = num
        while (num > 0) {
            const digit = num % 10;
            const newNumDigit = mapping[digit] * mult;
            newNum += newNumDigit;
            num = Math.floor(num / 10);
            mult *= 10;
        }
        if (!map.has(newNum)) {
            map.set(newNum, []);
        }
        map.get(newNum).push(tmp)
    }

    const keys = [...map.keys()].sort((a,b) => a - b);
    let res = [];
    for (const k of keys) {
        const arr = map.get(k);
        for (const val of arr) {
            res.push(val);
        }
    }

    return res;
  
};