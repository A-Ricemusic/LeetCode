
#stack = [1,2,3,5]
#pushed = [1,2,3,4,5]
#popped = [4,5,3,2,1]
#pushIndex = 5
#popIndex = 



class Solution:
    def validateStackSequences(self, pushed: List[int], popped: List[int]) -> bool:
        stack = []
        N = len(pushed)
        pushIndex = 0
        popIndex = 0
        interations = 0
        while pushIndex <= N and popIndex <= N:
            if len(stack) == 0 or stack[-1] != popped[popIndex] and pushIndex < N:
                stack.append(pushed[pushIndex])
                pushIndex += 1
            elif stack[-1] == popped[popIndex]:
                stack.pop()
                popIndex += 1
            if len(stack) == 0 and pushIndex == N and popIndex == N:
                return True
            if interations > (2*N):
                return False
            interations += 1


        
        