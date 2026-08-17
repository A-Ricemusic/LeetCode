class Solution:
    def canFinish(self,speed, h, piles):
        totalHours = 0
        for pile in piles:
            totalHours += math.ceil(pile / speed)
        return totalHours <= h

    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        left = 1
        right = max(piles)

        while left < right:
            middle = (left + right) // 2
            if self.canFinish(middle, h, piles):
                right = middle
            else:
                left = middle + 1
        return right
        