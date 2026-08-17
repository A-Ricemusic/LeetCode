# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        currentMax = float("-inf")
        good = [0]

        def dfs(root, currentMax, good):
            if root is None:
                return
            if root.val >= currentMax:
                good[0] += 1
                currentMax = root.val
            dfs(root.left, currentMax, good)
            dfs(root.right, currentMax, good)
            return good[0]

        return dfs(root, currentMax, good)