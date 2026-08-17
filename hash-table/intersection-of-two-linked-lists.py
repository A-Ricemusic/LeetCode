class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        if headA is None or headB is None:
            return None

        visited = set()
        currentOne, currentTwo = headA, headB

        while currentOne:
            visited.add(currentOne)
            currentOne = currentOne.next

        while currentTwo:
            if currentTwo in visited:
                return currentTwo
            currentTwo = currentTwo.next

        return None

        