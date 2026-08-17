class Solution:
    def checkAlmostEquivalent(self, word1: str, word2: str) -> bool:
        counterOne = Counter(word1)
        counterTwo = Counter(word2)
        for char in counterOne.keys():
            if char not in counterTwo and counterOne[char] > 3:
                return False
            if abs(counterOne[char] - counterTwo[char]) > 3:
                return False
        for char in counterTwo.keys():
            if char not in counterOne and counterTwo[char] > 3:
                return False
            if abs(counterOne[char] - counterTwo[char]) > 3:
                return False
        return True
        