function islandPerimeter(grid: number[][]): number {
if (!grid || grid.length === 0) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  let perimeter = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        // Every land cell adds 4 to the perimeter
        perimeter += 4;

        // Subtract 2 for each internal border.
        // We only check up and left to avoid double-counting.
        // Each border will be found exactly once this way.

        // Check the neighbor above
        if (r > 0 && grid[r - 1][c] === 1) {
          perimeter -= 2;
        }

        // Check the neighbor to the left
        if (c > 0 && grid[r][c - 1] === 1) {
          perimeter -= 2;
        }
      }
    }
  }

  return perimeter;
}