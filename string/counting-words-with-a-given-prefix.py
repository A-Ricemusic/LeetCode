class TrieNode:
    def __init__(self):
        self.children = {}
        self.frequency = 0

class Trie:
    def __init__(self):
        self.root = TrieNode()
    
    def insertWord(self, word: str) -> None:
        currentNode = self.root
        for char in word:
            if char not in currentNode.children:
                currentNode.children[char] = TrieNode()
            currentNode = currentNode.children[char]
            currentNode.frequency += 1
    
    def countPrefix(self, prefix: str) -> int:
        currentNode = self.root
        for char in prefix:
            if char not in currentNode.children:
                return 0
            currentNode = currentNode.children[char]
        return currentNode.frequency 



class Solution:
    def prefixCount(self, words: List[str], pref: str) -> int:
        myTrie = Trie()
        for word in words:
            myTrie.insertWord(word)

        return myTrie.countPrefix(pref)
        