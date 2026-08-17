function pivotInteger(n: number): number {
    if (n === 1) {
        return 1;
    }
    let leftSum: number = 0;
    for (let i = 1; i < n + 1; i++) {
        leftSum += i;
    }

    let rightSum: number = 0;

    for (let i = n; i > 0; i--) {
        leftSum -= i;

        if (leftSum === rightSum) {
            return i;
        } 
        if (rightSum > leftSum) {
            return -1
        }
        rightSum += i;
    }
    
};