class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        currentAltitude = 0
        maxAltitude = currentAltitude
        for num in gain:
            currentAltitude += num
            maxAltitude = max(currentAltitude, maxAltitude)
        return maxAltitude
        