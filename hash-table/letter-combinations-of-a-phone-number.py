class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if len(digits) == 0:
            return []

        myDict = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz"
        }

        def backtrack(index, path):
            if len(digits) == len(path):
                comb.append("".join(path))
                return
            for char in myDict[digits[index]]:
                path.append(char)
                backtrack(index + 1, path)
                path.pop()

        comb = []
        backtrack(0,[])
        return comb

