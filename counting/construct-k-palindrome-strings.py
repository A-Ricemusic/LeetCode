class Solution:
    def canConstruct(self, s: str, k: int) -> bool:
        if len(s) < k:
            return False
        frequency = [0] * 26
        oddCount = 0
        for char in s:
            index = ord(char) - ord("a")
            frequency[index] += 1

        for count in frequency:
            if count % 2 == 1:
                oddCount += 1
        return oddCount <= k
        