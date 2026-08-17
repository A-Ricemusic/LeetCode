function numberOfPaths(grid: number[][], k: number): number {
    let ROWS: number= grid.length;
    let COLS: number = grid[0].length;
    let MOD: number = 10**9 + 7
    const cache: number[][][] = Array.from({ length: ROWS }, () =>
  Array.from({ length: COLS }, () => Array(k).fill(-1))
);


    function dfs(r: number, c: number, remain: number): number {

          if (r === ROWS || c === COLS) {
            return 0;
        }

        remain = (remain + grid[r][c]) % k

        if (cache[r][c][remain] > -1) {
            return cache[r][c][remain];
        }

        if (r === ROWS - 1 && c === COLS - 1) {
            return cache[r][c][remain] = remain === 0 ? 1 : 0;
        }
      
        return cache[r][c][remain] = 
            (dfs(r + 1, c, remain) + dfs(r, c + 1, remain)) % MOD;
    }
    return dfs(0,0,0)
    
};