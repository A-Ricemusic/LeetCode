class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack = []
        for ast in asteroids:
            # Collision conditions
            while stack and ast < 0 and stack[-1] > 0:
                top = stack.pop()
                if abs(top) == abs(ast):  # Both asteroids destroy each other
                    break
                elif abs(top) > abs(ast):  # The stack asteroid is larger
                    stack.append(top)
                    break
            else:
                # No collision or stack is empty or last asteroid in stack is negative
                if not (stack and ast < 0 and stack[-1] > 0):
                    stack.append(ast)
        return stack
        