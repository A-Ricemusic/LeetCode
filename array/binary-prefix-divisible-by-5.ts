function prefixesDivBy5(nums: number[]): boolean[] {
    let result: boolean[] = [];
    let remainder: number = 0;

    for (let num of nums) {
        remainder = ((remainder << 1)+ num) % 5;
        result.push(remainder === 0);
    }
    return result;
    
};