class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key = lambda x: x[1])
        i = 0
        answer = 0
        N = len(intervals)
        k = float("-inf")
        while i < N:
            if intervals[i][0] >= k:
                k = intervals[i][1]
            else:
                answer += 1
                
            i += 1

        return answer
        #[[1,11], [2,12], [11,22], [1,100]]