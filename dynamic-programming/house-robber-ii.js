/**
 * @param {number[]} nums
 * @return {number}
 */

 var houseRob = function(nums) {
    const n = nums.length;
    let prev = nums[0];
    let curr = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        const tmp = curr
        curr = Math.max(curr, prev + nums[i])
        prev = tmp
    }
    return curr
}

var rob = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    };
    if (nums.length === 2) {
        return Math.max(nums[0], nums[1])
    };
    const res1 = houseRob(nums.slice(0, nums.length - 1));
    const res2 = houseRob(nums.slice(1, nums.length));

    return Math.max(res1, res2);
};

