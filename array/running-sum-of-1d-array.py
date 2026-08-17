class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        answer = []
        if nums == []:
            return answer
        for i in range(len(nums)):
            if i ==0:
                answer.append(nums[0])
            else:
                answer.append(nums[i] + answer[i -1])
        return answer
