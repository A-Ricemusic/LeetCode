# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def getHeight(self, root: TreeNode) -> int:
        if root is None:
            return -1
        return 1 + max(self.getHeight(root.left), self.getHeight(root.right))

    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        if root is None:
            return True
        left_height = self.getHeight(root.left)
        right_height = self.getHeight(root.right)
        return (abs(left_height - right_height) < 2) and self.isBalanced(root.left) and self.isBalanced(root.right)

        