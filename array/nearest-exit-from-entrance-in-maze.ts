function nearestExit(maze: string[][], entrance: number[]): number {
    type QueueItem = [number, number, number];

    let queue: QueueItem[] = [];
    const m: number = maze.length;
    const n: number = maze[0].length;

    const visited: Set<string> = new Set();

    const directions = [
        [1,0],
        [-1,0],
        [0,1],
        [0,-1]
    ];

    queue.push([entrance[0], entrance[1], 0]);
    visited.add(`${entrance[0]}, ${entrance[1]}`);



    while (queue.length > 0) {
        const [row, col, step] = queue.shift();
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            const key = `${newRow}, ${newCol}`;

            if (newRow < 0 || newRow >= m || newCol < 0 || newCol >= n) {
                continue;
            }

            if (visited.has(key)) {
                continue;
            }

            if (maze[newRow][newCol] === "+") {
                continue;
            }

            

            const isExit = newRow === 0 || newCol === 0 || newCol === n - 1 || newRow === m - 1;

            if (isExit) {
                return step + 1;
            }
            visited.add(key);
            queue.push([newRow, newCol, step + 1]);
        }
    }
    return -1;
};