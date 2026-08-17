function lengthOfLastWord(s: string): number {
    s = s.trim();
    let right: number = s.length - 1;
    let res: number = 0;
    while (s[right] !== " " && right >= 0) {
        res++;
        right--;
    }
    return res
    
};