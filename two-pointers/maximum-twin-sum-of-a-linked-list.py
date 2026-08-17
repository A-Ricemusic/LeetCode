# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# 5, 4, 2, 1 , 1, 1, 1, 1
class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        if head.next.next is None:
            return head.val + head.next.val
        
        myList = []
        current = head
        maxSum = 0
        while current:
            myList.append(current.val)
            current = current.next
        left = 0
        right = len(myList) - 1
        while left < right:
            currentSum = myList[left] + myList[right]
            maxSum = max(currentSum, maxSum)
            left += 1
            right -= 1
        return maxSum

        

        