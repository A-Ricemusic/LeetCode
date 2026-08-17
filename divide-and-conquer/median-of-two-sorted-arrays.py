class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        for num in nums2:
            nums1.append(num)
        nums1.sort()
        index = len(nums1) // 2
        if (len(nums1) % 2) != 0:
            return float(nums1[index])
        else:
           return float((nums1[index] + nums1[index - 1]) / 2)

        
        