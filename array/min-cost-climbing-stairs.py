class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        minimumCost = [0] * (len(cost) + 1)
        for i in range(2, len(cost) + 1):
            oneStep = minimumCost[i - 1] + cost[i - 1]
            twoStep = minimumCost[i - 2] + cost[i - 2]
            minimumCost[i] = min(oneStep,twoStep)
        return minimumCost[-1]
        