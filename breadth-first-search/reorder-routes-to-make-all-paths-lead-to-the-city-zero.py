class Solution:
    def __init__(self):
        self.count = 0

    def dfs(self, node, parent, adj):
        for neighbor, sign in adj[node]:
            if neighbor != parent:
                self.count += sign
                self.dfs(neighbor, node, adj)

    def minReorder(self, n, connections):
        adj = [[] for _ in range(n)]
        for connection in connections:
            adj[connection[0]].append((connection[1], 1))
            adj[connection[1]].append((connection[0], 0))
        
        self.dfs(0, -1, adj)
        return self.count
