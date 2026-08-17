

class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        frequencyCounter = Counter(arr)
        listValues = list(frequencyCounter.values())
        listSet = set(listValues)
        return len(listValues) == len(list(listSet))

        