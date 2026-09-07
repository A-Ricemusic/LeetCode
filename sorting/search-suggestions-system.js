/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */

class TrieNode {
    constructor() {
        this.children = new Map();
        this.possibilites = [];
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let curr = this.root;
        for (const char of word) {
            if (!curr.children.has(char)) {
                curr.children.set(char, new TrieNode())
            }
            curr = curr.children.get(char)
            curr.possibilites.push(word)
        }
    }

    get(prefix) {
        let curr = this.root;
        for (const char of prefix) {
            if (!curr.children.has(char)) {
                return []
            }
            curr = curr.children.get(char);
        }
        return curr.possibilites.slice(0,3);
    }
}



var suggestedProducts = function(products, searchWord) {
    products.sort();
    let res = [];
    const trie = new Trie();
    for (product of products) {
        trie.insert(product);
    }
    for (let i = 0; i < searchWord.length; i++) {
        const arr = trie.get(searchWord.substring(0, i + 1));
        res.push(arr);
    }
    return res;
};