function twoSum(numbers: number[], target: number): number[] {
    let left: number = 0
    let right: number = numbers.length - 1;

    while (left < right) {
        let currentSum: number = numbers[left] + numbers[right];
        if (currentSum === target) {
            return [left + 1,right + 1];
        } else if (currentSum < target) {
            left++;
        } else {
            right --;
        }
    }
    return [-1,-1]
};