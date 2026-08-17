class SmallestInfiniteSet:

    def __init__(self):
        self.isPresent: {int} = set()
        self.addedIntegers: [int] = []
        self.currentInteger = 1
        

    def popSmallest(self) -> int:
        if len(self.addedIntegers) > 0:
            answer = heapq.heappop(self.addedIntegers)
            self.isPresent.remove(answer)
        else:
            answer = self.currentInteger
            self.currentInteger += 1
        return answer
        

    def addBack(self, num: int) -> None:
        if self.currentInteger <= num or num in self.isPresent:
            return
        heapq.heappush(self.addedIntegers, num)
        self.isPresent.add(num)
        


# Your SmallestInfiniteSet object will be instantiated and called as such:
# obj = SmallestInfiniteSet()
# param_1 = obj.popSmallest()
# obj.addBack(num)