# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:

    def bfs(self, node):
        if node is None:
            return []
        nextLevel = deque([node])
        result = []
        while nextLevel:
            currentLevel = nextLevel
            nextLevel = deque()
            while currentLevel:
                currentNode = currentLevel.popleft()
                if currentNode.left:
                    nextLevel.append(currentNode.left)
                if currentNode.right:
                    nextLevel.append(currentNode.right)
                result.append(currentNode.val)
        return result




    def averageOfSubtree(self, root: TreeNode) -> int:
        result = 0
        nextLevel = deque([root])

        while nextLevel:
            currentLevel = nextLevel
            nextLevel = deque()
            while currentLevel:
                currentRoot = currentLevel.popleft()
                tree = self.bfs(currentRoot)
                average = sum(tree) // len(tree)
                if average == currentRoot.val:
                    result += 1
                if currentRoot.left:
                    nextLevel.append(currentRoot.left)
                if currentRoot.right:
                    nextLevel.append(currentRoot.right)
        return result

        
 
        