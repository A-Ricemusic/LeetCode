/**
 * @param {number[]} nums
 * @return {number}

    example case 1:
    nums = [4,4,2,4,3]
    {
    2: 1
    3: 1
    4: 3
    }


    example case 2:
    nums = [4,4,2,4,3,5]
    {
    2: 1
    3: 1
    4: 3
    5: 1
    }
    4 -> 2,3,4, 2,3,5, 3,4,5
    for every unique group of 3 we would want to take the maximum number


 */
var unequalTriplets = function(nums) {
    const hashMap = new Map();
    for (const num of nums) {
        hashMap.set(num, (hashMap.get(num) ?? 0) + 1);
    }

    const vals = [...hashMap.values()]
    let res = 0;
    const d = vals.length;
    for (let i = 0; i < d - 2; i++) {
        for (let j = i + 1; j < d - 1; j++) {
            for (let k = j + 1; k < d; k++) {
                res += (vals[i] * vals[j] * vals[k])
            }
        }
    }

    return res;
    
};