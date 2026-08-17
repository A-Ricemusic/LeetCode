class Solution:
    def bfs(self,freshOranges: int, queue, grid: List[List[int]] ) -> int:
        dirs = [(1,0), (-1,0), (0,1), (0,-1)]
        amtOfRows = len(grid) 
        amtOfCol = len(grid[0]) 
        amountOfMinutes = 0
        while queue:
            children = queue
            queue = deque()
            while children:
                child = children.popleft()
                for direction in dirs:
                    x = child[0] + direction[0]
                    y = child[1] + direction[1]
                    if x >= amtOfRows or x < 0:
                        continue
                    if y >=  amtOfCol or y < 0:
                        continue
                    if grid[x][y] == 1:
                        queue.append((x, y))
                        freshOranges -= 1
                        grid[x][y] = 2
            amountOfMinutes += 1
            if freshOranges == 0:
                return amountOfMinutes
        
        return -1 if freshOranges != 0 else amountOfMinutes

        
    def orangesRotting(self, grid: List[List[int]]) -> int:
        freshOranges = 0
        rottenOranges = deque()
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == 1:
                    freshOranges += 1
                if grid[i][j] == 2:
                    rottenOranges.append((i,j))
        if freshOranges == 0:
                return 0
        return self.bfs(freshOranges, rottenOranges, grid)

        
        