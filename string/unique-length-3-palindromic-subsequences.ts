function countPalindromicSubsequence(s: string): number {
    let map: Record<string,number> = {};
    let res = new Set<string>;
    let seen = new Set<string>;

    for (let char of s) {
        if (char in map) {
            map[char]++;
        } else {
            map[char] = 1
        }
    }

    for (let m of s) {
        map[m]--;
        for (let pair of seen) {
            if (seen.size === 0) {
                break;
            }
            const c = pair.split('')[0];
            if (map[c] > 0) {
                res.add(`${m},${c}`)
            }
        }
        seen.add(`${m},${m}`)
    }
    
    
    return res.size;
};