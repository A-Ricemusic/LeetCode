/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 nums2 = [5,3,7,2,8,1]
 [8,1]

 {
  5: 7
  3: 7
  7: 8
  2: 8
  8: -1
  1: -1
 
 
 }
 
 */
var nextGreaterElement = function(nums1, nums2) {
    const hashMap = new Map();
    let stack = []
    for (const num of nums) {
        while (stack.length !=== 0 && stack.at(-1) < num) {
            const num2 = stack.pop()
            hashMap.set(num2, num);
        }
        hashMap.set(num, -1);
        stack.push(num);
    }

    const res = []
    for (const num of nums1) {
        res.push(hashMap.get(num));
    };

    return res;

    
};