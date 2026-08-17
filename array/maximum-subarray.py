class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        currentArray = maxArray = nums[0]
        for i in range(1, len(nums)):
            currentArray = max(nums[i],currentArray + nums[i])
            maxArray = max(currentArray, maxArray)
        return maxArray
        