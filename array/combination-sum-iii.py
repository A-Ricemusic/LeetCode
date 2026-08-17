class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        results = []

        def backtrack(remain, comb, nextStep):
            if remain == 0 and len(comb) == k:
                results.append(list(comb))
                return
            if remain < 0 or len(comb) > k:
                return
            for i in range(nextStep,9):
                comb.append(i + 1)
                backtrack(remain - (i + 1), comb, i + 1)
                comb.pop()

        
        backtrack(n,[], 0)
        return results
        