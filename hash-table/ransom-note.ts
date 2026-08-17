function canConstruct(ransomNote: string, magazine: string): boolean {

    let hashMap: Record<string,number> = {};

    for (let char of ransomNote) {
        char in hashMap? hashMap[char]++ : hashMap[char] = 1;
    }

    for (let char of magazine) {
        if (char in hashMap) {
            hashMap[char]--;
        } else {
            continue;
        }
    };


    for (let char in hashMap) {
        if (hashMap[char] > 0) {
            return false;
        }
    }

    return true;

};