class Solution:
    #o(n) time o(k) space
    def maxVowels(self, s: str, k: int) -> int:

        vowels = {"a", "e", "i", "o", "u"}
        currentVowelCount = 0
        len(s)
        for i in range(k):
            if s[i] in vowels:
                currentVowelCount += 1

        maxVowelCount = currentVowelCount

        for i in range(k, len(s)):
            if s[i] in vowels:
                currentVowelCount += 1
            if s[i - k] in vowels:
                currentVowelCount -= 1
            maxVowelCount = max(currentVowelCount, maxVowelCount)

        return maxVowelCount




        