/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function(stickers, target) {
    const memo = new Map();

    const dfs = (remaining) => {
        if (remaining.length === 0) return 0;

        if (memo.has(remaining)) {
            return memo.get(remaining);
        }

        const targetCount = new Map();

        for (const c of remaining) {
            targetCount.set(c, (targetCount.get(c) || 0) + 1);
        }

        let best = Infinity;

        for (const sticker of stickers) {
            const stickerCount = new Map();

            for (const c of sticker) {
                stickerCount.set(c, (stickerCount.get(c) || 0) + 1);
            }

            let next = "";

            for (const [c, count] of targetCount) {
                const leftover = Math.max(
                    0,
                    count - (stickerCount.get(c) || 0)
                );

                next += c.repeat(leftover);
            }

            // this sticker didn't help at all
            if (next.length === remaining.length) continue;

            const result = dfs(next);

            if (result !== Infinity) {
                best = Math.min(best, 1 + result);
            }
        }

        memo.set(remaining, best);
        return best;
    };

    // canonicalize the initial state
    const start = target.split("").sort().join("");

    const result = dfs(start);

    return result === Infinity ? -1 : result;
};