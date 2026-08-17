# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxLevelSum(self, root: Optional[TreeNode]) -> int:
        maxSum = float("-inf")
        currentLevel = 0
        bestLevel = 1
        queue = deque([root])
        while queue:
            currentLevel += 1
            level = queue
            queue = deque()
            currentSum = 0
            while level:
                node = level.pop()
                currentSum += node.val
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            if currentSum > maxSum:
                maxSum = currentSum
                bestLevel = currentLevel
        return bestLevel


        