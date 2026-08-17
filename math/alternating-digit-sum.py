class Solution:
    def alternateDigitSum(self, n: int) -> int:
        n_as_string = str(n)
        if len(n_as_string) == 1:
            return n
        left = 0
        answer = 0
        for char in n_as_string:
            num = int(char)
            if left % 2 == 1:
                num *= -1
            answer += num
            left += 1
        return answer
            


        