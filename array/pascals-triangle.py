class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        triangle = []
        for numRow in range(numRows):
            row = [0 for _ in range(numRow + 1)]
            row[0] = 1
            row[-1] = 1
            for j in range(1, len(row) - 1):
                row[j] = triangle[numRow - 1][j - 1] + triangle[numRow - 1][j]
            triangle.append(row)
        return triangle
        