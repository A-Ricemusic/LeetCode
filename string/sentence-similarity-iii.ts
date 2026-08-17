function areSentencesSimilar(sentence1: string, sentence2: string): boolean {
    // TypeScript infers string[] for these based on .split()
    let words1: string[] = sentence1.split(' ');
    let words2: string[] = sentence2.split(' ');

    // Type of words1 and words2 remains string[] after swap
    if (words1.length < words2.length) {
        [words1, words2] = [words2, words1];
    }

    // TypeScript infers number for these based on their initial assignment
    let left1: number = 0;
    let left2: number = 0;

    let right1: number = words1.length - 1;
    let right2: number = words2.length - 1;

    while (left2 <= right2 && words1[left1] === words2[left2]) {
        left1++;
        left2++;
    }

    while (left2 <= right2 && words1[right1] === words2[right2]) {
        right1--;
        right2--;
    }

    // Type is boolean, inferred from the comparison `left2 > right2`
    return left2 > right2;
}