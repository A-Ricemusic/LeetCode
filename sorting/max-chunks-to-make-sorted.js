/**
 * @param {number[]} arr
 * @return {number}\

 */
var maxChunksToSorted = function(arr) {
    let currSum = 0;
    let accSum = 0;
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        accSum += i;
        currSum += arr[i];
        if (accSum === currSum) {
            res++;
        }
    }

    return res;
};