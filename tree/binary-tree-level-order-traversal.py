# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if root is None:
            return []
        nextLevel = [root]
        result = []
        while nextLevel:
            level = nextLevel
            nextLevel = []
            levelAsArray = []
            while level:
                node = level.pop(0)
                levelAsArray.append(node.val)
                if node.left:
                    nextLevel.append(node.left)
                if node.right:
                    nextLevel.append(node.right)
            result.append(levelAsArray)
        return result
        