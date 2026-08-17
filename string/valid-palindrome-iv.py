class Solution:
    def makePalindrome(self, s: str) -> bool:
        
        #time/space o(n) where n is the length of the string
        #two pointer solution

        #use cases
        if len(s) <= 5:
            return True

        left = 0 
        right = len(s) - 1
        operations = 0

        while left < right:
            if s[left] != s[right]:
                if operations == 2:
                    return False
                operations += 1
            left += 1
            right -= 1
        return True
        