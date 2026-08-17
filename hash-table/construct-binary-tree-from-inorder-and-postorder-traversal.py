# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        def helper(left : int, right : int):
            if left > right:
                return None
            rootValue = postorder.pop()
            root = TreeNode(rootValue)
            root.right = helper(indexMap[rootValue] + 1, right)
            root.left = helper(left, indexMap[rootValue] - 1)
            return root

        indexMap = {element: index for index, element in enumerate(inorder)}
        return helper(0, len(inorder) - 1)
        