# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if root is None:
            return False
        de = [(root, targetSum - root.val)]

        while len(de) > 0:
            r, currentSum = de.pop()
            if r.left is None and r.right is None and currentSum == 0:
                return True
            if r.left is not None:
                de.append((r.left, currentSum - r.left.val))
            if r.right is not None:
                de.append((r.right, currentSum - r.right.val))
        return False

        