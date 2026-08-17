function maxSumDivThree(nums: number[]): number {
    let smallestOne: number = Number.POSITIVE_INFINITY;
    let smallestTwo: number = Number.POSITIVE_INFINITY;
    let total: number = 0
    for (let num of nums) {
        total += num;
        if (num % 3 === 1) {
            smallestTwo = Math.min(smallestTwo, num + smallestOne);
            smallestOne = Math.min(num, smallestOne);
        }
        if (num % 3 === 2) {
            smallestOne = Math.min(smallestOne, smallestTwo + num);
            smallestTwo = Math.min(num, smallestTwo);
        }
    }

    if (total % 3 === 0) {
        return total;
    } 
    if (total % 3 === 1) {
        return total - smallestOne;
    
    }
    if (total % 3 === 2) {
        return total - smallestTwo;
    }
};