class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        left = zeros = 0
        # Single pass, no extra storage
        for right in range(len(nums)):
            zeros += not nums[right]  # Use not for boolean to int conversion
            
            # Move left pointer if window invalid
            if zeros > k:
                zeros -= not nums[left]
                left += 1
                
        return right - left + 1






        