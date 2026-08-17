class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        if sum(nums) == len(nums):
            return len(nums) - 1
        if sum(nums) == 0:
            return 0
        left = zeros = max_len = 0

        for right in range(len(nums)):
            zeros += nums[right] == 0

            while zeros > 1:
                zeros -= nums[left] == 0
                left += 1
            max_len = max(max_len, right - left)

            if max_len >= len(nums) - left - 1:
                break
        return max_len
        