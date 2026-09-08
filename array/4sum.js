/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let res = [];
    nums.sort((a,b) => a - b);
    const visited = new Set();
    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            let l = j + 1
            let r = nums.length - 1
            while (l < r) {
                const sum = nums[i] + nums[j] + nums[l] + nums[r];
                if (sum > target) {
                    r--;
                } else if (sum < target) {
                    l++;
                } else {
                    const arr = [nums[i], nums[j], nums[l], nums[r]];
                    arr.sort((a,b) => a - b);
                    const key = arr.join(",")
                    if (!visited.has(key)) {
                        visited.add(key)
                        res.push(arr);
                    }
                    l++;
                }
            }
        }
    }

    return res;
    
};