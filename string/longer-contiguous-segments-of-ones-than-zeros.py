class Solution:
    def checkZeroOnes(self, s: str) -> bool:
        oneCount, zeroCount = 0, 0
        maxOneCount, maxZeroCount = 0, 0
        for char in s:
            if char == "1":
                oneCount += 1
                zeroCount = 0
            if char == "0":
                zeroCount += 1
                oneCount = 0
            maxOneCount = max(maxOneCount,oneCount)
            maxZeroCount = max(maxZeroCount,zeroCount)
        return maxOneCount > maxZeroCount
        