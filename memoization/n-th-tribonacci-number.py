class Solution:
    def tribonacci(self, n: int, memo = None) -> int:
        if memo is None:
            memo = {0: 0, 1: 1, 2: 1}
        if n not in memo:
            memo[n] =  self.tribonacci(n - 1, memo) + self.tribonacci(n - 2, memo) + self.tribonacci(n - 3, memo)
        return memo[n]
        