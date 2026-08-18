/**
 * @param {number[]} nums
 * @return {number}
    nums = [4,4,2,4,3]
 */
var unequalTriplets = function(nums) {

    const freqTable = new Map()
    for (const num of nums) {
        freqTable.set(num, (freqTable.get(num) || 0) + 1)
    }



    const keys = [...freqTable.keys()]
    let res = 0
    for (let i = 0; i < keys.length; i++) {
        for (let j = i + 1; j < keys.length; j++) {
            for (let k = j + 1; k < keys.length; k++) {
                const dv1 = keys[i]
                const dv2 = keys[j]
                const dv3 = keys[k]
                res += freqTable.get(dv1) * freqTable.get(dv2) * freqTable.get(dv3)
            }
        }
    }

    return res;
    
};