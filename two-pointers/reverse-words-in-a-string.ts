function reverseWords(s: string): string {
    s = s.trim()
    return s.split(/\s+/g).reverse().join(" ")
    
};