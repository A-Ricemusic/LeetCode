class Solution:
    def paintWalls(self, cost: List[int], time: List[int]) -> int:
        n = len(cost)
        dp = [float("inf")] * (n + 1)
        dp[0] = 0
        for i in range(n):
            covers = time[i] + 1
            for j in range(n, -1, -1):
                prev = max(0, j - covers)
                dp[j] = min(dp[j], dp[prev] + cost[i])
        return dp[n]