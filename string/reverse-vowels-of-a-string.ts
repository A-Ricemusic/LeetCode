function reverseVowels(s: string): string {
    const vowelSet = new Set<string>(["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]);
    let left: number = 0;
    let right: number = s.length - 1
    const arr = s.split("")
    while (left < right) {
        if (vowelSet.has(arr[left]) && vowelSet.has(arr[right])) {
            let temp: string = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        } else if (vowelSet.has(arr[left]) && !vowelSet.has(arr[right])) {
            right--;
        } else if (!vowelSet.has(arr[left]) && vowelSet.has(arr[right])) {
            left++;
        } else {
            right--;
            left++;
        }
    }
    return arr.join("");
    
};