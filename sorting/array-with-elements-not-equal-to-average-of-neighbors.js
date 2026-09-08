/**
 * @param {number[]} nums
 * @return {number[]} 
    nums = [1,2,3,4,5]
 */
var rearrangeArray = function(nums) {
    nums.sort((a,b) => a - b);
    const len = Math.floor(nums.length / 2);
    res = new Array(nums.length).fill(0);
    const arr1 = [];
    const arr2 = [];
    for (let i = 0; i <= len; i++) {
        arr1.push(nums[i])
    }
    for (let i = len + 1; i < nums.length; i++) {
        arr2.push(nums[i])
    }
    let j = 0;
    for (let i = 0; i < nums.length; i+=2) {
        res[i] = arr1[j];
        j++;
    }

    j = 0;
    for (let i = 1; i < nums.length; i+=2) {
        res[i] = arr2[j];
        j++;
    }
    
    return res;

};