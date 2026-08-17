from typing import List

class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        # Create a graph from prerequisites
        graph = [[] for _ in range(numCourses)]
        for dest, src in prerequisites:
            graph[src].append(dest)
        
        # 0 = unvisited, 1 = visiting, 2 = visited
        visit = [0] * numCourses

        def dfs(course):
            if visit[course] == 1:  # Cycle detected
                return False
            if visit[course] == 2:  # Already processed
                return True
            
            # Mark the node as visiting
            visit[course] = 1
            for neighbor in graph[course]:
                if not dfs(neighbor):
                    return False
            
            # Mark the node as visited
            visit[course] = 2
            return True

        # Check each course if it can be completed
        for course in range(numCourses):
            if visit[course] == 0:  # Only process unvisited nodes
                if not dfs(course):
                    return False
        
        return True