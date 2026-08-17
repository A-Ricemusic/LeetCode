function isCircularSentence(sentence: string): boolean {

    const words: string[] = sentence.trim().split(" ");

    if (words.length === 1) {
        return words[0].at(0) === words[0].at(-1);
    }

    for (let i = 0; i < words.length; i++) {
        if (i === words.length - 1) {
            if (words[i].at(-1) === words[0].at(0)) {
                return true;
            } else {
                return false
            }
        }

        if (words[i].at(-1) !== words[i + 1].at(0)) {
            return false;
        }
    }
    
};