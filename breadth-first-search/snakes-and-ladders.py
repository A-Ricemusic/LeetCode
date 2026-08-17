class Solution:
    def positionToCoordinate(self, position: int, n: int) -> tuple:
        # Adjusting 1-indexed position to 0-indexed for easier calculation
        position -= 1
        row = n - 1 - (position // n)
        # Determining the direction of rows based on the current row index
        if (n - 1 - row) % 2 == 0:
            col = position % n
        else:
            col = n - 1 - (position % n)
        return (row, col)

    def snakesAndLadders(self, board: List[List[int]]) -> int:
        n = len(board)
        finalPosition = n * n
        queue = deque([(1, 0)])
        visited = set([1])

        while queue:
            position, move = queue.popleft()
            for i in range(1, 7):
                nextPosition = position + i
                if nextPosition > finalPosition:
                    continue
                row, col = self.positionToCoordinate(nextPosition, n)
                if board[row][col] != -1:
                    nextPosition = board[row][col]
                if nextPosition in visited:
                    continue
                if nextPosition == finalPosition:
                    return move + 1
                visited.add(nextPosition)
                queue.append((nextPosition, move + 1))

        return -1


                

        