function findLadders(beginWord: string, endWord: string, wordList: string[]): string[][] {
    const wordSet: Set<string> = new Set(wordList);

    if (!wordSet.has(endWord)) {
        return [];
    }

    const parentMap: Map<string, Set<string>> = new Map();
    const distanceMap: Map<string, number> = new Map();
    const queue: string[] = [];

    queue.push(beginWord);
    distanceMap.set(beginWord, 0);

    let minLength: number = Infinity;
    let foundEndWordInBFS: boolean = false;

    while (queue.length > 0) {
        const levelSize: number = queue.length;

        if (distanceMap.get(queue[0])! >= minLength) {
            break;
        }
        for (let k: number = 0; k < levelSize; k++) {
            const currentWord: string = queue.shift()!;
            if (currentWord === endWord) {
                minLength = distanceMap.get(currentWord)!;
                foundEndWordInBFS = true;
            }

            for (let i: number = 0; i < currentWord.length; i++) {
                const originalChar: string = currentWord[i];
                for (let charCode: number = 97; charCode <= 122; charCode++) {
                    const char: string = String.fromCharCode(charCode);
                    if (char === originalChar) {
                        continue;
                    }
                    const nextWord: string = currentWord.substring(0,i) + char + currentWord.substring(i+ 1);
                    if (wordSet.has(nextWord)) {
                        const newDistance: number = distanceMap.get(currentWord)! + 1;
                    
                        if (!distanceMap.has(nextWord)) {
                            distanceMap.set(nextWord, newDistance);
                            queue.push(nextWord);

                            if (!parentMap.has(nextWord)) {
                                parentMap.set(nextWord, new Set<string>());
                            }
                        
                            parentMap.get(nextWord)!.add(currentWord);
                        }
                    
                        else if (distanceMap.get(nextWord)! === newDistance) {
                            if (!parentMap.has(nextWord)) {
                                parentMap.set(nextWord, new Set<string>());
                            }
                            parentMap.get(nextWord)!.add(currentWord);
                        }
                    }
                }

            }
        }
    }

    if (!foundEndWordInBFS) {
        return [];
    }

    const allShortestPaths: string[][] = [];

    const currentPath: string[] = [endWord];

    function backtrackDFS(word: string) {
        if (word===beginWord) {
            allShortestPaths.push([...currentPath].reverse());
            return;
        }

        const predecessors: Set<string> | undefined = parentMap.get(word);
        if (predecessors) {
            for (const prevWord of predecessors ) {
                currentPath.push(prevWord);
                backtrackDFS(prevWord);
                currentPath.pop();
            }
        }
    }
    backtrackDFS(endWord);
    return allShortestPaths;

};