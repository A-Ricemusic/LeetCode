function isPalindrome(x: number): boolean {
    const xString : string = x.toString()
    let left = 0
    let right = xString.length -1
    while (left < right) {
        if (xString[left] != xString[right]) {
            return false
        }
        else {
            left = left + 1
            right = right - 1
        }
    }
    return true
};