class Solution:
    def rob(self, nums: List[int]) -> int:
        if not nums:
            return 0
        N = len(nums)
        housesRobbed = [None for _ in range(N + 1)]
        housesRobbed[N] = 0
        housesRobbed[N - 1] = nums[N - 1]
        for i in range(N - 2, -1, -1):
            housesRobbed[i] = max(housesRobbed[i + 1], housesRobbed[i + 2] + nums[i])
        return housesRobbed[0]
        