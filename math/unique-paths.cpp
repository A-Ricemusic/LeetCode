// class Solution {
// public:
//     int traverse(vector<vector<int>>& grid, int m, int n) {
//         // if (m < 0 || m >= grid.size() || n < 0 || n >= grid[0].size()) return 0;
//         if (m == 1 || n == 1) return 1;
//         if (grid[m][n] != 0) return grid[m][n];

//         grid[m][n] = traverse(grid, m - 1, n) + traverse(grid, m, n - 1);
//         return grid[m][n];
//     }

//     int uniquePaths(int m, int n) {
//         vector<vector<int>> grid(m, vector<int>(n, 0));

//         return traverse(grid, m, n);
//     }
// };

class Solution {
public:
    int traverse(vector<vector<int>>& grid, int m, int n) {
        if (m < 0 || m >= grid.size() || n < 0 || n >= grid[0].size()) return 0;
        if (m == 0 || n == 0) return 1;  // If either index is 0, there is only one path to that cell
        if (grid[m][n] != 0) return grid[m][n];  // Use memoized result

        grid[m][n] = traverse(grid, m - 1, n) + traverse(grid, m, n - 1);  // Sum paths from above and left
        return grid[m][n];
    }

    int uniquePaths(int m, int n) {
        vector<vector<int>> grid(m, vector<int>(n, 0));
        return traverse(grid, m - 1, n - 1);  // Adjust for zero-based index
    }
};