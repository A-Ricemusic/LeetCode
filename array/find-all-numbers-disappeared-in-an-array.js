/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const mySet = new Set()
    for (let i = 1; i <= nums.length; i++) {
        mySet.add(i)
    }

    for (const num of nums) {
        mySet.delete(num)
    }
    const res = []
    for (const num of mySet) {
        res.push(num)
    }

    return res
    
};