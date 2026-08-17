# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque
class Solution:
    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        queue = deque([root])
        array = []
        while queue:
            size = len(queue)
            for i in range(size):
                node = queue.popleft()
                array.append(node.val)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
        array.sort()
        minDistance = float("inf")
        for i in range(1,len(array)):
            curr = array[i] - array[i - 1]
            minDistance = min(curr, minDistance )
        return minDistance

        