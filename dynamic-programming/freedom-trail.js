/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {
    const memo = new Map()

    const dfs = (i,j) => {
        if (j >= key.length) return 0;
        let best = Infinity
        const state = i * key.length + j
        if (memo.has(state)) return memo.get(state)
        for (let k = 0; k < ring.length; k++) {
            if (ring[k] === key[j]) {
                const minCost = Math.min(
                    Math.abs(k - i),
                    ring.length - Math.abs(k - i)
                ) + 1 + dfs(k, j + 1)
                best = Math.min(best, minCost)
            }
        }
        memo.set(state,best)

        return best;
    }


    return dfs(0,0)
};