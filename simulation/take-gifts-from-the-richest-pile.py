class Solution:
    def pickGifts(self, gifts: List[int], k: int) -> int:
        for i in range(k):
            currentMax = max(gifts)
            index = gifts.index(currentMax)
            gifts[index] = int((gifts[index]**(0.5)))
        return int(sum(gifts))
        