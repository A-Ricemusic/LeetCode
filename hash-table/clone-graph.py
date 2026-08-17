"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

from typing import Optional
class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        if node is None:
            return None
        stack = [node]
        hashMap = {}
        hashMap[node] = Node(node.val, [])

        while stack:
            current = stack.pop()
            for nei in current.neighbors:
                if nei not in hashMap:
                    hashMap[nei] = Node(nei.val, [])
                    stack.append(nei)
                hashMap[current].neighbors.append(hashMap[nei])
        return hashMap[node]


        