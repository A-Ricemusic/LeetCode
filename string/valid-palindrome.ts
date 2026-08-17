function isPalindrome(s: string): boolean {
    
    return s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() === s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split("").reverse().join("")

  
};