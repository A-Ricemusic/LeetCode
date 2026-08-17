function findMaxDistance(cities: number[], adj: number[][]): number {
    let maxDist: number = 0;
    const citySet: Set<number> = new Set(cities)

    for (let startCity of cities) {
        const distances = BFS(startCity,citySet,adj)
        for (let city of cities) {
            maxDist = Math.max(maxDist, distances[city])
        }
    }

    return maxDist;

    function BFS(startCity: number, citySet: Set<number>, adj: number[][]): number[] {
        const distances: number[] = [];
        distances[startCity] = 0;
        const queue: number[] = [startCity];
        const visited: Set<number> = new Set([startCity])

        while (queue.length > 0) {
            let current: number = queue.shift()!;

            for (let neighbor of adj[current]) {
                if (citySet.has(neighbor) && !visited.has(neighbor)) {
                    visited.add(neighbor)
                    distances[neighbor] = distances[current] + 1
                    queue.push(neighbor)
                }
            }
        }
        return distances
    }
}

function isConnected(cities: number[], adj: number[][]): boolean {
    if (cities.length < 2) {
        return false;
    }

    const visited : Set<number> = new Set();
    const citySet: Set<number> = new Set(cities);

    function dfs(city: number) {
        visited.add(city);

        for (let neighbor of adj[city]) {
            if (citySet.has(neighbor) && !visited.has(neighbor)) {
                dfs(neighbor);
            }
        }
    }

    dfs(cities[0]);

    return visited.size === cities.length;

}

function countSubgraphsForEachDiameter(n: number, edges: number[][]): number[] {
    const adj: number[][] = Array.from( {length: n + 1}, () => []);
    const results: number[] = new Array(n - 1).fill(0);

    for (let [edge1,edge2] of edges) {
        adj[edge1].push(edge2);
        adj[edge2].push(edge1);
    }

    for (let mask = 1; mask < (1 << n); mask++) {
        const cities: number[] = [];

        for (let i = 1; i <= n; i++) {
            if (mask & (1 << (i - 1))) {
                cities.push(i)
            }
        }

        if (isConnected(cities, adj)) {
            const maxDist = findMaxDistance(cities,adj);

            results[maxDist - 1]++;
        }
    }

    return results
};