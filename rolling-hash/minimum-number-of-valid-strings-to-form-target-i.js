/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */

 class TrieNode {
    constructor() {
        this.children = new Map();
    }
 }

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insertWord(word) {
        let curr = this.root
        for (const c of word) {
            if (!curr.children.has(c)) {
                curr.children.set(c, new TrieNode())
            }
            curr = curr.children.get(c)
        }
    }
}


var minValidStrings = function(words, target) {
    const trie = new Trie()
    for (const word of words) {
        trie.insertWord(word)
    }

    const n = target.length;
    const dp = new Array(n + 1).fill(Infinity);
    dp[n] = 0;

    for (let i = n - 1; i >= 0; i--) {
        let node = trie.root;
        let j = i;
        while (j < n && node.children.has(target[j])) {
            node = node.children.get(target[j]);
            j++;
            dp[i] = Math.min(dp[i],1 + dp[j]);
        }
    }
    
    return dp[0] === Infinity? -1 : dp[0]
};