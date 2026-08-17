function numberOfCuts(n: number): number {

    if (n < 2) {
        return 0;
    }

    if (n % 2 === 0) {
        return n / 2;
    }
    else {
        return n;
    }

    
};