class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        S = sum(nums)
        leftSum = 0
        for i, x in enumerate(nums):
            if leftSum == (S - leftSum - x):
                return i
            leftSum += x
        return -1
        