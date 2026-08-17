# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        return helperFunction(root, array = [])
    
def helperFunction(root, array):
    if root is not None:
        array.append(root.val)
        helperFunction(root.left,array)
        helperFunction(root.right, array)
    return array

        