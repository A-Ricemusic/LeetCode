/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.prefixSum = []
    let total = 0
    for (const num of nums) {
        total += num
        this.prefixSum.push(total)
    }
    
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}

 [-2,0,1,-4,-2,-3]
 */
NumArray.prototype.sumRange = function(left, right) {
    if (left === 0) return this.prefixSum[right]
    return this.prefixSum[right] - this.prefixSum[left - 1]
    
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */