class Solution:
    def check(self, nums: list[int]) -> bool:
        
        n = len(nums)
        left, right = 0, n - 1

        while left < right:
            mid = (left + right) // 2
            if nums[mid] > nums[right]:  
                left = mid + 1
            else:  
                right = mid

        rotation_point = left
        count_drops = 0

        for i in range(n):
            if nums[i] > nums[(i + 1) % n]:
                count_drops += 1
                if count_drops > 1:
                    return False
        return True

