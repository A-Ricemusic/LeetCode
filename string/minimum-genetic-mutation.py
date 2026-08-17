from collections import deque

class Solution:
    def minMutation(self, startGene: str, endGene: str, bank: List[str]) -> int:
        queue = deque([(startGene,0)])
        choices = ("A", "C", "G", "T")
        myBank = set(bank)
        visited = set(startGene)
        while len(queue) > 0:
            gene, count = queue.popleft()
            if gene == endGene:
                return count
            
            for choice in choices:
                for i in range(len(gene)):
                    newGene = gene[:i] + choice + gene[i + 1:]
                    if newGene not in visited and newGene in myBank:
                        queue.append([newGene, count + 1])
                        visited.add(newGene)
        return -1

        