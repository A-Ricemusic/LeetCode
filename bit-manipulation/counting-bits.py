class Solution:
    def countBits(self, n: int) -> List[int]:
        def popCount(x: int):
            count = 0
            while x != 0:
                x = x & (x - 1)
                count += 1
            return count
        ans = [0] * (n + 1)
        for i in range(n + 1):
            ans[i] = popCount(i)
        return ans
        