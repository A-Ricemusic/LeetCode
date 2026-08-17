function longestPalindrome(s: string): string {
    // If the string is empty or has only one character, it's already a palindrome
    if (s.length < 2) {
        return s;
    }

    let start: number = 0; // Start index of the longest palindrome found so far
    let maxLength: number = 1; // Length of the longest palindrome found so far

    // Helper function to expand around a center
    // It takes the string, a left index, and a right index
    // It expands outwards as long as the characters match and stay within bounds
    // It then updates 'start' and 'maxLength' if a longer palindrome is found
    const expandAroundCenter = (left: number, right: number): void => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const currentLength = right - left + 1;
            if (currentLength > maxLength) {
                maxLength = currentLength;
                start = left;
            }
            left--;  // Expand leftwards
            right++; // Expand rightwards
        }
    };

    // Iterate through each character of the string
    for (let i = 0; i < s.length; i++) {
        // Case 1: Odd length palindromes (center is a single character at index 'i')
        // Example: "aba" -> center is 'b' at index 1
        expandAroundCenter(i, i);

        // Case 2: Even length palindromes (center is between 'i' and 'i+1')
        // Example: "abba" -> center is between the two 'b's, effectively between indices 1 and 2
        expandAroundCenter(i, i + 1);
    }

    // Extract the longest palindromic substring using the 'start' index and 'maxLength'
    return s.substring(start, start + maxLength);
}