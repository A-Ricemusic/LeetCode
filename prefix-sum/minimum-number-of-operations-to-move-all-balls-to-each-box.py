class Solution:
    def minOperations(self, boxes: str) -> List[int]:
        amountOfBoxes = len(boxes)
        ans = []
        for i in range(amountOfBoxes):
            count = 0
            for j in range(i + 1,amountOfBoxes):
                if boxes[j] == "1":
                    count += j - i
            for j in range(i,-1, -1):
                if boxes[j] == "1":
                    count += i - j
            ans.append(count)
        return ans

        