function isMatch(s: string, p: string): boolean {
    // dp[i][j] will be true if the first i characters of s match the first j characters of p
    const dp: boolean[][] = Array(s.length + 1).fill(0).map(() => Array(p.length + 1).fill(false));

    // Base case: Empty string matches empty pattern
    dp[0][0] = true;

    // Handle patterns like "a*", "a*b*", etc. when s is empty
    // dp[0][j] means matching empty string s with pattern p up to index j-1
    for (let j = 1; j <= p.length; j++) {
        // If the current character in pattern is '*', it can potentially match zero of the preceding element.
        // So, if p[j-1] is '*', we check if the pattern up to j-2 matched.
        if (p[j - 1] === '*') {
            // '*' requires a preceding character, so we check j-2.
            // The pattern p[j-1] ('*') itself could match zero of p[j-2].
            // Thus, dp[0][j] depends on dp[0][j-2].
            dp[0][j] = dp[0][j - 2];
        }
    }

    // Fill the DP table
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            // Get the current characters from s and p (using i-1 and j-1 because strings are 0-indexed)
            const sChar = s[i - 1];
            const pChar = p[j - 1];

            // Case 1: If the current pattern character is NOT '*'
            if (pChar !== '*') {
                // If the characters match (or pattern is '.') then the result depends on the previous state
                if (sChar === pChar || pChar === '.') {
                    dp[i][j] = dp[i - 1][j - 1];
                }
                // If characters don't match, dp[i][j] remains false (its default)
            }
            // Case 2: If the current pattern character IS '*'
            else {
                // '*' has two possibilities:
                // 1. It matches ZERO of the preceding element (p[j-2]).
                //    In this case, we ignore p[j-2] and '*' entirely.
                //    So, dp[i][j] would be true if dp[i][j-2] is true.
                //    (We need j >= 2 because '*' must have a preceding char)
                const zeroMatch = (j >= 2) ? dp[i][j - 2] : false;

                // 2. It matches ONE or MORE of the preceding element (p[j-2]).
                //    This is possible only if the current char in s (s[i-1])
                //    matches the preceding char in p (p[j-2]) (or p[j-2] is '.').
                //    If it matches, then the result depends on whether the rest of s (up to i-1)
                //    matches the pattern up to j (p[0...j-1]).
                //    This is equivalent to checking dp[i-1][j].
                const precedingChar = (j >= 2) ? p[j - 2] : null; // Get the char before '*'

                const oneOrMoreMatch = (precedingChar !== null && (sChar === precedingChar || precedingChar === '.'))
                                       ? dp[i - 1][j]
                                       : false;

                // The current state dp[i][j] is true if EITHER of these possibilities is true.
                dp[i][j] = zeroMatch || oneOrMoreMatch;
            }
        }
    }

    // The final answer is whether the entire string s matches the entire pattern p
    return dp[s.length][p.length];
}