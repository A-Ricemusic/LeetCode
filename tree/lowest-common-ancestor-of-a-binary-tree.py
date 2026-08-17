# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        ans = None
        def helper(node: TreeNode) -> bool:
            nonlocal ans
            if node is None:
                return False
            left = helper(node.left)
            right = helper(node.right)
            mid = node == p or node == q
            if mid + left + right >= 2:
                ans = node
            return mid or left or right
        helper(root)
        return ans

            

        