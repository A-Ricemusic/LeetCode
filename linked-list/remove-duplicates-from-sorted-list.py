# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        values = set()
        current = head
        prev = None
        while current:
            if current.next is None:
                nextNode = None
            else:
                nextNode = current.next
            if current.val in values:
                prev.next = nextNode
                current.next = None
            else:
                values.add(current.val)
                prev = current
            current = nextNode

        # if prev.val in values:
        #         prev.next = nextNode
        return head

        