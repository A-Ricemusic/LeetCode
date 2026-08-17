class Solution:
    def firstUniqChar(self, s: str) -> int:
        myCounter = Counter(s)

        for index, char in enumerate(s):
            if char in myCounter and myCounter[char] == 1:
                return index
        return -1

        