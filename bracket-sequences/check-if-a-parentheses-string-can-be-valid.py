class Solution:
    def canBeValid(self, s: str, locked: str) -> bool:
        length = len(s)
        if length % 2 == 1:
            return False
        openBrackets = []
        unlocked = []

        for i in range(length):
            if locked[i] == "0":
                unlocked.append(i)
            elif s[i] == "(":
                openBrackets.append(i)
            elif s[i] == ")":
                if openBrackets:
                    openBrackets.pop()
                elif unlocked:
                    unlocked.pop()
                else:
                    return False
        while openBrackets and unlocked and openBrackets[-1] < unlocked[-1]:
            openBrackets.pop()
            unlocked.pop()
        if openBrackets:
            return False
        return True
        