function intersectionSizeTwo(intervals: number[][]): number {
    let result: number = 0
    intervals.sort((a,b) => {
        if (a[1] !== b[1]) {
            return a[1] - b[1]
        }
        return b[0] - a[0]
    });

    let p1: number = -1;
    let p2: number = -1;

    for (const [left,right] of intervals) {
        if (p2 < left) {
            result += 2;
            p2 = right;
            p1 = right - 1;
        } 
        else if (p1 < left) {
            result++;
            p1 = p2;
            p2 = right;
        } 
    }
    return result
};