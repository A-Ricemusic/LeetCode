# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNode(self, node, prev1):
        if prev1 is not None:
            prev1.next = node.next  # Skip the current node
        node.next = None  # Disconnect the node from the list

    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        currentNode = head
        prev = None

        while currentNode:
            nextNode = currentNode.next
            if currentNode.val == val:
                if prev is None:  # Removing the head node
                    head = currentNode.next
                else:
                    self.removeNode(currentNode, prev)
            else:
                prev = currentNode  # Update prev only if no removal happens
            currentNode = nextNode  # Move to the next node

        return head

        