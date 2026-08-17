# from typing import Optional, List

# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if root is None:
            return []
        
        nextLevel = [root]
        leftToRight = True
        ans = []

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
            if  leftToRight == False:
                levelAsArray = levelAsArray[::-1]
            leftToRight = not leftToRight
            ans.append(levelAsArray)
            # print("leftToRight", leftToRight, "ans", ans,"levelAsArray", levelAsArray)
        return ans

        