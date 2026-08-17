class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rows = [set() for _ in range(len(board))]
        cols = [set() for _ in range(len(board))]
        squares = [set() for _ in range(len(board))]

        for i in range(len(board)):
            for j in range(len(board)):
                element = board[i][j]
                if element == ".":
                    continue
                if element in rows[i]:
                    return False
                else:
                    rows[i].add(element)
                if element in cols[j]:
                    return False
                else:
                    cols[j].add(element)
                currentSquareIndex = 0
                if 0 <= i <= 2:
                    if 0 <= j <= 2:
                        currentSquareIndex = 0
                    elif  3 <= j <= 5:
                        currentSquareIndex = 1
                    elif  6 <= j <= 8:
                        currentSquareIndex = 2
                elif 3 <= i <= 5:
                    if 0 <= j <= 2:
                        currentSquareIndex = 3
                    elif  3 <= j <= 5:
                        currentSquareIndex = 4
                    elif  6 <= j <= 8:
                        currentSquareIndex = 5
                elif 6 <= i <= 8:
                    if 0 <= j <= 2:
                        currentSquareIndex = 6
                    elif  3 <= j <= 5:
                        currentSquareIndex = 7
                    elif  6 <= j <= 8:
                        currentSquareIndex = 8
                currentSquare = squares[currentSquareIndex]
                if element in currentSquare:
                    return False
                else:
                    currentSquare.add(element)
        return True
        