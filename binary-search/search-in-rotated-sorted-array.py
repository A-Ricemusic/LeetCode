
#4, 6, 7, 8, 10
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        n = len(nums)
        left = 0
        right = n - 1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] > nums[-1]:
                left = mid + 1
            else:
                right = mid - 1
        def binarySearch(leftBound, rightBound, target):
            while leftBound <= rightBound:
                mid = (leftBound + rightBound) // 2
                if nums[mid] == target:
                    return mid
                elif nums[mid] < target:
                    leftBound = mid + 1
                else:
                    rightBound = mid - 1
            return -1
        
        answer = binarySearch(0, left - 1, target)
        if answer != -1:
            return answer
        return binarySearch(left, n - 1, target)
        

    

        