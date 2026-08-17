# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:

        if head is None:
            return True
        current = head
        myList = []
        while current:
            myList.append(current.val)
            current = current.next
        return myList == myList[::-1]

        