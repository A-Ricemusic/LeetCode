function smallestRepunitDivByK(k: number): number {
    let result: number = 1;
    let current: number = 1;
    let seen = new Set<number>();

    while (current % k !== 0) {
        if (seen.has(current)) {
            return -1;
        }
        seen.add(current);
        current = 10 * (current % k) + 1
        result++;
    }
    return result;
};