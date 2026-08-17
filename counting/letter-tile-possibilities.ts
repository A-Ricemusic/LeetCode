function numTilePossibilities(tiles: string): number {
    const res: Set<string> = new Set<string>();
    const visited: boolean[] = new Array(tiles.length).fill(false);
    const curr: string[] = [];


    const dfs = () => {
        if (!res.has(curr.join(""))) {
            res.add(curr.join(""))
        }

        for (let j = 0; j < tiles.length; j++) {
            if (!visited[j]) {
                visited[j] = true;
                curr.push(tiles[j])
                dfs()
                visited[j] = false;
                curr.pop()
            }
        }

    }
    dfs()
    return res.size - 1
    
};