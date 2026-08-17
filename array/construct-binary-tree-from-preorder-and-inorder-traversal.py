# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        def helper(left : int, right : int) -> TreeNode:
            nonlocal preorderIndex
            if left > right:
                return None
            rootVal = preorder[preorderIndex]
            root = TreeNode(rootVal)
            preorderIndex += 1
            root.left = helper(left, indexMap[rootVal] - 1)
            root.right = helper(indexMap[rootVal] + 1, right)
            return root


        preorderIndex = 0
        indexMap = {element : index for index, element in enumerate(inorder)}
        return helper(0, len(inorder) - 1)