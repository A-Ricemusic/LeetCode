class Solution:
    def dfs(self,coordinate: tuple, grid: List[List[str]], visited: List[List[bool]]) -> None:
        i = coordinate[0]
        j = coordinate[1]

        if visited[i][j] == True:
            return 

        visited[i][j] = True

        amtOfRows = len(grid)
        amtOfCols = len(grid[0])
        dirs = [(1,0), (-1,0), (0,1), (0,-1)]
        for x, y in dirs:
            if x + i >= amtOfRows or x + i < 0:
                continue
            if y + j >= amtOfCols or y + j < 0:
                continue
            if grid[x + i][y + j] == "1":
                self.dfs((x + i,y + j), grid, visited)
        




    def numIslands(self, grid: List[List[str]]) -> int:
        amtOfRows = len(grid)
        amtOfCols = len(grid[0])
        visited = [[False for _ in range(amtOfCols)] for _ in range(amtOfRows)]
        numberOfIslands = 0
        for i in range(amtOfRows):
            for j in range(amtOfCols):

                if visited[i][j]:
                    continue

                if grid[i][j] == "0":
                    visited[i][j] = True
                    continue

                if visited[i][j] == False and grid[i][j] == "1":
                    numberOfIslands += 1
                    self.dfs((i,j),grid,visited)
        return numberOfIslands

        