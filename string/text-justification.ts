function fullJustify(words: string[], maxWidth: number): string[] {
    let res: string[] = [];
    let line: string[] = [];
    let length: number = 0;
    let i: number = 0;

    while (i < words.length) {
        //two cases

        //case 1: line complete
        if (line.length + length + words[i].length > maxWidth) {
            let extraSpace: number = maxWidth - length;
            let spaces: number = Math.floor(extraSpace / Math.max(1,(line.length - 1)))
            let remainder: number = extraSpace % Math.max(1,(line.length - 1))

            for (let j = 0; j < Math.max(1,line.length - 1); j++) {
                line[j] += " ".repeat(spaces);
                if (remainder !== 0) {
                    line[j] += " ";
                    remainder -= 1;
                }
            }
            res.push(line.join(""));
            line = []
            length = 0
        }

        //case 2: line not complete:
        line.push(words[i]);
        length += words[i].length;
        i += 1

    } 
    let lastLine: string = line.join(" ");
    let trailSpace: number = maxWidth - lastLine.length;
    res.push(lastLine + " ".repeat(trailSpace))
    return res;
    
};