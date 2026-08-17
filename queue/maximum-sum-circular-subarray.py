class Solution:
    def maxSubarraySumCircular(self, nums):
        cur_max = 0
        cur_min = 0
        max_sum = nums[0]
        min_sum = nums[0]
        total_sum = 0

        for num in nums:
            # Normal Kadane's algorithm for maximum subarray sum
            cur_max = max(cur_max, 0) + num
            max_sum = max(max_sum, cur_max)
            
            # Modified Kadane's for minimum subarray sum
            cur_min = min(cur_min, 0) + num
            min_sum = min(min_sum, cur_min)
            
            # Calculate total sum of the array
            total_sum += num
        
        # If all numbers are negative, total_sum == min_sum, return max_sum
        if total_sum == min_sum:
            return max_sum

        # Return the maximum of max_sum or total_sum - min_sum
        return max(max_sum, total_sum - min_sum)

        