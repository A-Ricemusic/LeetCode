from typing import List

class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        from collections import defaultdict, deque
        

        courseMap = defaultdict(list)
        inDegree = [0] * numCourses
        
        for course, prereq in prerequisites:
            courseMap[prereq].append(course)
            inDegree[course] += 1
        
        # Queue for BFS
        zeroInDegreeQueue = deque([i for i in range(numCourses) if inDegree[i] == 0])
        result = []
        
        while zeroInDegreeQueue:
            prereq = zeroInDegreeQueue.popleft()
            result.append(prereq)
            
            # Decrease the in-degree of dependent courses
            for course in courseMap[prereq]:
                inDegree[course] -= 1
                if inDegree[course] == 0:
                    zeroInDegreeQueue.append(course)
        
        # If all courses are taken, return result
        if len(result) == numCourses:
            return result
        else:
            return []  # Cycle detected or not all courses can be taken





        