
class Solution:
    def gameOfLife(self, board: List[List[int]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        dirs = [(1,0), (0,1), (-1,0), (0,-1), (1,1), (-1, -1), (1, -1), (-1,1)]
        amtOfRows = len(board)
        amtOfCols = len(board[0])
        for currentRow in range(amtOfRows):
            for currentCol in range(amtOfCols):
                livingNeighbors = 0
                for x, y in dirs:
                    if x + currentRow >= amtOfRows or x + currentRow < 0:
                        continue
                    if y + currentCol >= amtOfCols or y + currentCol < 0:
                        continue
                    if board[x + currentRow][y + currentCol] == 1 or board[x + currentRow][y + currentCol] == 2:
                        livingNeighbors += 1
                element = board[currentRow][currentCol]
                if livingNeighbors < 2 and element  == 1:
                    board[currentRow][currentCol] = 2
                if 2 <= livingNeighbors <= 3 and element  == 1:
                    board[currentRow][currentCol] = 1
                if livingNeighbors > 3 and element  == 1:
                    board[currentRow][currentCol] = 2
                if livingNeighbors == 3 and element  == 0:
                    board[currentRow][currentCol] = -1
        #alive to dead: 2
        #dead to alive: -1
            
        for currentRow in range(amtOfRows):
            for currentCol in range(amtOfCols):
                if board[currentRow][currentCol] == 2:
                    board[currentRow][currentCol] = 0
                elif board[currentRow][currentCol] == -1:
                    board[currentRow][currentCol] = 1



