class TrieNode:
    def __init__(self):
        self.isWord = False
        self.children = [None] * 26

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str):
        currentNode = self.root

        for char in word:
            index = ord(char) - ord('a')
            if currentNode.children[index] is None:
                currentNode.children[index] = TrieNode()
            currentNode = currentNode.children[index]
        currentNode.isWord = True

    def dfsWithPrefix(self, curr, word, result):
        if len(result) == 3:
            return
        if curr.isWord:
            result.append(word)
        for i in range(26):
            if curr.children[i]:
                self.dfsWithPrefix(curr.children[i], word + chr(i + ord('a')), result)

    def getWordsStartingWith(self, prefix):
        currentNode = self.root
        result = []
        for char in prefix:
            index = ord(char) - ord('a')
            if not currentNode.children[index]:
                return result
            currentNode = currentNode.children[index]
        self.dfsWithPrefix(currentNode, prefix, result)
        return result

class Solution:
    def suggestedProducts(self, products: List[str], searchWord: str) -> List[List[str]]:
        trie = Trie()
        for w in products:
            trie.insert(w)
        result = []
        prefix = ""
        for c in searchWord:
            prefix += c
            result.append(trie.getWordsStartingWith(prefix))
        return result
        