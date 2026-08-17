function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let result: boolean[] = new Array(candies.length).fill(false);
    let maxCandy: number = 0;

    for (let candy of candies) {
        if (candy > maxCandy) {
            maxCandy = candy;
        }
    }

    for (let i:number = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= maxCandy ) {
            result[i] = true;
        }
    }
    
    return result;
    
};