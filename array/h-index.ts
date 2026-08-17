function hIndex(citations: number[]): number {
    let n: number = citations.length;
    let paperCount = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        if (citations[i] >= n) {
            paperCount[paperCount.length - 1]++;
        } else {
            paperCount[citations[i]]++;
        }
    }
    let count: number = 0;
    for (let j = paperCount.length -1; j >= 0; j--){
        count += paperCount[j];
        if (count >= j) {
            return j;
        }
    } 
    return -1
};