class Solution:
    def maxOperations(self, nums: List[int], k: int) -> int:
        nums.sort()
        left = 0
        right = len(nums) - 1
        result = 0

        while left < right:
            currentNum = nums[left] + nums[right]
            if currentNum  == k:
                result += 1
                left += 1
                right -= 1
            elif currentNum  > k:
                right -= 1
            elif currentNum  < k:
                left += 1
        return result
            

        