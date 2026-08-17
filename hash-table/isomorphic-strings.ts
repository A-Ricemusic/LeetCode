function isIsomorphic(s: string, t: string): boolean {
    let mapST: Record<string, string> = {};
    let mapTS: Record<string, string> = {};


    for (let i = 0; i < s.length; i++) {
        let char1: string = s[i];
        let char2: string = t[i];

        if ( ( (char1 in mapST) && mapST[char1] !== char2 ) || ( (char2 in mapTS) && mapTS[char2] !== char1 ) ) {
            return false;
        }
        mapST[char1] = char2;
        mapTS[char2] = char1;
    }
    return true;
    
};