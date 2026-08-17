# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        if not head:
            return None
        
        leftNode, rightNode = head, head
        stop = False

        def helper(rightNode, left, right):
            nonlocal leftNode, stop
            if right == 1:
                return
            rightNode = rightNode.next

            if left > 1:
                leftNode = leftNode.next
            helper(rightNode, left - 1, right - 1)
            if leftNode == rightNode or rightNode.next == leftNode:
                stop = True
            if not stop:
                leftNode.val, rightNode.val = rightNode.val, leftNode.val
                leftNode = leftNode.next

        helper(rightNode, left, right)
        return head
        