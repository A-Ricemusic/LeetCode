class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        rowsToZero = set()
        colsToZero = set()
        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                element = matrix[i][j]
                if element == 0:
                    rowsToZero.add(i)
                    colsToZero.add(j)
        rowsToZero = list(rowsToZero)
        colsToZero = list(colsToZero)
        for row in rowsToZero:
            for col in range(len(matrix[0])):
                matrix[row][col] = 0
        for col in colsToZero:
            for row in range(len(matrix)):
                matrix[row][col] = 0
