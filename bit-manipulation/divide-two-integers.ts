function divide(dividend: number, divisor: number): number {
    let isNegative: boolean = false;

    if (dividend < 0 && divisor < 0) {
        isNegative = false;
    } else if (dividend < 0 || divisor < 0) {
        isNegative = true;
    }

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    
    let res: number = 0;
    


    while (dividend >= divisor) {
        let decrement: number = divisor;
        let counter: number = 1;
        while (dividend>=decrement) {
            dividend-=decrement;
            res+= counter;
            decrement+= decrement;
            counter+= counter;
        }
    }
    if (isNegative) {
        res -= (res + res);
    }

    return Math.min(Math.max(-2147483648,res),2147483647)

};