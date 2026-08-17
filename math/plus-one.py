class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        numAsString = ""
        ans = []
        for digit in digits:
            newChar = str(digit)
            numAsString += newChar
        print(numAsString)  
        number = int(numAsString) + 1
        numberAsStringList = list(str(number))
        numberAsStringList
        for number in numberAsStringList:
            num = int(number)
            ans.append(num)
        return ans

        