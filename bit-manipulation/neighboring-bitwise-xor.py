class Solution:
    def doesValidArrayExist(self, derived: List[int]) -> bool:
        original = [0]
        for i in range(len(derived)):
            original.append(derived[i] ^ original[i])
        
        checkForZero = original[0] == original[-1]
        original = [1]
        for i in range(len(derived)):
            original.append(derived[i] ^ original[i])
        checkForOne = original[0] == original[-1]
        return checkForZero or checkForOne
        