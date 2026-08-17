# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        maxPath = float("-inf")
        def helper(node : TreeNode) -> int:
            nonlocal maxPath
            if node is None:
                return 0
            left = max(helper(node.left), 0)
            right = max(helper(node.right),0)
            maxPath = max(maxPath, left + right + node.val)
            return max(left + node.val, right + node.val)
        helper(root)
        return maxPath


        