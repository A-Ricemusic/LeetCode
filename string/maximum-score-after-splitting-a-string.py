class Solution:
    def maxScore(self, s: str) -> int:
        sList = str(s)
        zeroCount = 0
        oneCount = sList.count("1")
        maxCount = 0
        for char in sList[:len(s) - 1]:
            print(zeroCount,oneCount)
            if char == "0":
                zeroCount += 1
            elif char == "1":
                oneCount -= 1
            maxCount = max(maxCount,zeroCount + oneCount)
        return maxCount
        