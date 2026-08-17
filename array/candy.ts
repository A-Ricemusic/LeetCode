function candy(ratings: number[]): number {
    let n: number = ratings.length;
    let candies: number[] = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            if (candies[i] <= candies[i - 1]) {
                candies[i] = candies[i - 1] + 1
            }
        }
    }

    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            if (candies[i] <= candies[i + 1]) {
                candies[i] = candies[i + 1] + 1;
            }
        }
    }
    return candies.reduce((num,acc) => num + acc, 0)
};