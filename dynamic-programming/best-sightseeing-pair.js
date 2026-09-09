/**
 * @param {number[]} values
 * @return {number}
  values = [8,10,5,2,20]
  
 */
var maxScoreSightseeingPair = function(values) {
    let res = 0;
    for (let i = 0; i < values.length - 1; i++) {
        for (let j = i + 1; j < values.length; j++) {
            const sum = values[i] + values[j] + (i - j);
            res = Math.max(res, sum)
        }
    }
    return res;
};