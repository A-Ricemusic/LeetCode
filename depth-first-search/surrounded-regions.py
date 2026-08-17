class Solution:
    def dfs(self, row, col, board):
        # Base case: check for bounds and if the cell is not 'O'
        if row < 0 or row >= len(board) or col < 0 or col >= len(board[0]) or board[row][col] != 'O':
            return
        
        # Mark this cell as visited by converting 'O' to 'D'
        board[row][col] = 'D'
        
        # Explore all four possible directions
        self.dfs(row + 1, col, board)
        self.dfs(row - 1, col, board)
        self.dfs(row, col + 1, board)
        self.dfs(row, col - 1, board)

    def solve(self, board):
        if not board or not board[0]:
            return
        
        rows, cols = len(board), len(board[0])
        
        # Start DFS from 'O's on the border
        for row in range(rows):
            self.dfs(row, 0, board)  # Left column
            self.dfs(row, cols - 1, board)  # Right column
            
        for col in range(cols):
            self.dfs(0, col, board)  # Top row
            self.dfs(rows - 1, col, board)  # Bottom row

        # Replace all 'D' with 'O' and all 'O' with 'X'
        for row in range(rows):
            for col in range(cols):
                if board[row][col] == 'D':
                    board[row][col] = 'O'
                elif board[row][col] == 'O':
                    board[row][col] = 'X'

        