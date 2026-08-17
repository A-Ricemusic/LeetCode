class Solution:
    def generateTheString(self, n: int) -> str:
        chars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
        
        if n == 1:
            return "a"
        if n == 2:
            return "ab"
        answer = ""
        charIndex = 0

        for i in range(5):
            if n >= 100:
                answer += (chars[charIndex] * 99)
                n -= 99
                charIndex += 1
            else:
                break
        for j in range(10):
            if n >= 10:
                    answer += (chars[charIndex] * 9)
                    n -= 9
                    charIndex += 1
            else:
                break
        for k in range(10):
            if n > 0:
                    answer += chars[charIndex]
                    n -= 1
                    charIndex += 1
            else:
                break
        return answer

        