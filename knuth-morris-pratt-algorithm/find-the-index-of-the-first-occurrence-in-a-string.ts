function strStr(haystack: string, needle: string): number {
    let haystackLength: number = haystack.length;
    let needleLength: number = needle.length;

    for (let i = 0; i < haystackLength; i++) {
        for (let j = 0; j < needleLength; j++) {
            if (needle[j] !== haystack[i + j]) {
                break
            }
            if (j === needleLength - 1) {
                return i;
            }
        }
    }

    return -1
    
};