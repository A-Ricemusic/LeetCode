# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head.next is None:
            return None

        slow = head
        fast = head

        while fast and fast.next:
            prevMid = slow
            slow = slow.next
            fast = fast.next.next
            mid = slow

        prevMid.next = mid.next
        mid.next = None
        return head
        