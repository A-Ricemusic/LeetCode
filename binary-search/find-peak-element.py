class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        return self.search(nums, 0, len(nums) - 1)
    def search(self, nums: List[int], left: int, right: int):
        if left == right:
            return left
        mid = (right + left) // 2
        if nums[mid] > nums[mid + 1]:
            return self.search(nums, left, mid)
        return self.search(nums, mid + 1, right)
        