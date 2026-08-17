# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        return list(dfs(root1, [])) == list(dfs(root2, []))
    
def dfs(root, array):
    if root is None:
        return
    if root.left is None and root.right is None:
        array.append(root.val)
    dfs(root.left, array)
    dfs(root.right, array)
    return array

        