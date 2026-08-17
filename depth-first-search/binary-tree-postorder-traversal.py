# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.array = []

    def helper(self, root: Optional[TreeNode]) -> None:
        if root is not None:
            self.helper(root.left)
            self.helper(root.right)
            self.array.append(root.val)
            

    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        self.helper(root)
        return self.array
        