class Solution:
    def frequencySort(self, nums: List[int]) -> List[int]:
        myCounter = Counter(nums)
        nums.sort(key = lambda x : (myCounter [x], -x))
        return nums
        