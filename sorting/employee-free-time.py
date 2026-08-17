"""
# Definition for an Interval.
class Interval:
    def __init__(self, start: int = None, end: int = None):
        self.start = start
        self.end = end
"""

class Solution:
    def employeeFreeTime(self, schedule: '[[Interval]]') -> '[Interval]':
        OPEN = 0
        CLOSE = 1
        events = []
        for employee in schedule:
            for interval in employee:
                events.append((interval.start, OPEN))
                events.append((interval.end, CLOSE))
        events.sort()
        ans = []
        prev = None
        bal = 0
        for time, command in events:
            if bal == 0 and prev is not None:
                ans.append(Interval(prev, time))
            
            bal += 1 if command is OPEN else - 1
            prev = time
        return ans
        