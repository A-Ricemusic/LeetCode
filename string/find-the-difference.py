class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        counterS = Counter(s)
        counterT = Counter(t)
        for char in t:
            if char not in counterS:
                return char
            if counterS[char] != counterT[char]:
                return char
        