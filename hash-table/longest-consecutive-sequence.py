class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if not nums:
            return 0
            
        nums.sort()
        i = 1
        currentCount = maxCount = 1
        while i < len(nums):
            if nums[i - 1] == nums[i]:
                i += 1
                continue
            if nums[i - 1] == (nums[i] - 1):
                currentCount += 1
            else:
                currentCount = 1
            maxCount = max(currentCount,maxCount)
            i += 1
        return maxCount

