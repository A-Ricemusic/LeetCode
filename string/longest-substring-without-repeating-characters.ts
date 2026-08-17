function lengthOfLongestSubstring(s: string): number {
    let seen: Record<string,number> = {};
    let currentString: string[] = [];
    let result: number = 0 
    for (let i = 0; i < s.length; i++) {
        if (s[i] in seen) {
            while (seen[s[i]] !== 0) {
                let removeChar: string = currentString.shift();
                seen[removeChar]--;
            }
            currentString.push(s[i]);
            seen[s[i]]++;
        } else {
            seen[s[i]] = 1
            currentString.push(s[i])
        }

        result = Math.max(result, currentString.length);
    }

    return result;
    
};