# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        def getNumbers(root : TreeNode, path : str):
            if root is None:
                return

            path += str(root.val)

            if root.left is None and root.right is None:
                number = int(path)
                numbers.append(number)
                
            getNumbers(root.left, path)
            getNumbers(root.right, path)

            
        numbers = []
        getNumbers(root, "")
        return sum(numbers)
        