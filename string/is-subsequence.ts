function isSubsequence(s: string, t: string): boolean {
    let p1: number = 0;

    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[p1]) {
            p1++;
        }
    }
    return p1 === s.length;
};