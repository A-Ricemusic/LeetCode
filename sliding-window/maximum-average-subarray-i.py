class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        currentSum = sum(nums[:k])
        maxSum = currentSum
        for idx, num in enumerate(nums[k:]):
            currentSum = currentSum + num - nums[idx] 
            maxSum = max(currentSum,maxSum)
        return maxSum / k
        