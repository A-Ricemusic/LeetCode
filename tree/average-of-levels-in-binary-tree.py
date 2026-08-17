# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:

        if root is None:
            return []
        nextLevel = deque([root])
        result = []
        while len(nextLevel) > 0:
            currentLevel = nextLevel
            nextLevel = deque()
            currSum = 0
            amountOfNode = len(currentLevel)
            while len(currentLevel) > 0:
                node = currentLevel.popleft()
                currSum += node.val
                if node.left is not None:
                    nextLevel.append(node.left)
                if node.right is not None:
                    nextLevel.append(node.right)
            result.append(currSum / amountOfNode)
        return result

        