# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getInOrderTraversal(self,root, array):
        if root is not None:
            self.getInOrderTraversal(root.left, array)
            array.append(root.val)
            self.getInOrderTraversal(root.right, array)

    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        array = []
        self.getInOrderTraversal(root, array)
        return array
        