class RecentCounter:

    def __init__(self):
        self.counter = 0
        self.slideWindow = deque()
        

    def ping(self, t: int) -> int:
        self.slideWindow.append(t)
        while self.slideWindow[0] < t - 3000:
            self.slideWindow.popleft()
        return len(self.slideWindow)
        


# Your RecentCounter object will be instantiated and called as such:
# obj = RecentCounter()
# param_1 = obj.ping(t)