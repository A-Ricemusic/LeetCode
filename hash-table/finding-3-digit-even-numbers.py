class Solution:
    def findEvenNumbers(self, digits: List[int]) -> List[int]:
        c = Counter(digits)
        resp = []
        if all(d&1 for d in c):
            return resp
        for d1 in c:
            if d1 !=0:
                c[d1]-=1
                for d2 in +c: # remove zero and negative counts
                    c[d2]-=1
                    for d3 in +c: # remove zero and negative counts
                        if not d3&1:
                            resp.append(int(f"{d1}{d2}{d3}"))
                    c[d2]+=1
                c[d1]+=1
        resp.sort()
        return resp          