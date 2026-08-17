class Solution:
    def checkIfExist(self, arr: List[int]) -> bool:
        mySet = set()
        for number in arr:
            if number in mySet:
                return True
            if number % 2 != 0:
                double = number * 2
                mySet.add(double)
                continue
            double = number * 2
            half = number // 2
            mySet.add(double)
            mySet.add(half)
        return False
        