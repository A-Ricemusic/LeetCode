# [[1,6], [2, 8], [7,12], [10,16]]




class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        points.sort(key = lambda x: x[1])
        N = len(points)
        k = float("-inf")
        overlap = 0
        for point in points:
            if point[0] == k:
                overlap += 1
                continue
            if point[0] > k:
                k = point[1]
            else:
                overlap += 1
           
        return N - overlap
        