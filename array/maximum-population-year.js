/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
    const arr = new Array(101).fill(0);

    for (const [birth, death] of logs) {
        arr[birth - 1950]++;
        arr[death - 1950]--;
    }

    let popMax = arr[0];
    let year = 1950;

    for (let i = 1; i < 101; i++) {
        arr[i] += arr[i - 1]
        if (arr[i] > popMax) {
            popMax= arr[i]
            year = 1950 + i
        }
    }

    return year
    
};