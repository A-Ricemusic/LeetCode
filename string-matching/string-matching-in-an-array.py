class TrieNode:
    def __init__(self):
        self.children = defaultdict(TrieNode)
        self.frequency = 0
class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insertWord(self, word: str) -> None:
        currentRoot = self.root
        for char in word:
            currentRoot = currentRoot.children[char]
            currentRoot.frequency += 1
    
    def isSubstring(self, word: str) -> bool:
        currentNode = self.root
        for char in word:
            currentNode = currentNode.children[char]
        return currentNode.frequency > 1

class Solution:
    def stringMatching(self, words: List[str]) -> List[str]:
        result = []
        trie = Trie()
        for word in words:
            for idx in range(len(word)):
                trie.insertWord(word[idx:])
        
        for word in words:
            if trie.isSubstring(word):
                result.append(word)
        return result