/* Python solution:
adj = defaultdict(list)

for n1,n2 in edges:
    adj[n1].append(n2)
    adj[n2].append(n1)

res = 0
def dfs(cur,parent):
    total = values[cur]
    for child in adj[cur]:
        if child != parent:
            total += dfs(child, cur)
    if total % k == 0:
        nonlocal res
        res += 1
    return total

    
dfs(0, -1)


return res

*/



function maxKDivisibleComponents(n: number, edges: number[][], values: number[], k: number): number {
    let adj: Record<number,number[]> = {}

    for (let i = 0; i < n; i++) {
        adj[i] = [];
    }

    for (let [n1,n2] of edges) {
        adj[n1].push(n2)
        adj[n2].push(n1)
    }
    
    let res: number = 0

    function dfs(cur: number, parent: number): number {
        let total: number = values[cur]

        for (let child of adj[cur]) {
            if (child !== parent) {
                total += dfs(child,cur)
            }
        }
        if (total % k === 0) {
            res++;
        }
        return total
    }

    dfs(0,-1)
    return res;
    
};