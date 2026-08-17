function mergeAlternately(word1: string, word2: string): string {
    let m: number = word1.length;
    let n: number = word2.length;
    let p1: number = 0;
    let p2: number = 0;
    let result: string = ""
    while (p1 < m && p2 < n) {
        result += word1[p1];
        result += word2[p2];
        p1++;
        p2++;
    }
    if (p1 < m) {
        for (let i: number = p1; i < m; i++) {
            result+= word1[i]
        }
    } else if (p2 < n) {
        for (let i: number = p2; i < n; i++) {
            result+= word2[i]
        }
    }
    return result;


};