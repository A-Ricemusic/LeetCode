class Solution:
    def reverse(self, x: int) -> int:
        y = str(x)
        y = list(y)
        result = []
        if y[0] == "-":
            result.append("-")
            y.pop(0)
        for i in range(len(y) - 1,-1, -1):
            result.append(y[i])
        try:
            result = "".join(result)
            result = int(result)
            if result < (-2**31) or result > (2**31):
                return 0
            else:
                return result
        except:
            return 0


        