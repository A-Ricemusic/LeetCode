class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        set_num1 = set(nums1)
        set_num2 = set(nums2)
        set1 = set()
        set2 = set()

        for num in nums1:
            if num not in set_num2:
                set1.add(num)
        for num in nums2:
            if num not in set_num1:
                set2.add(num)
        return [list(set1),list(set2)]

        