/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    let val1Max = values[0];
    let res = 0;
    for (let i = 1; i < values.length; i++) {
        let value2 = (values[i] - i);
        res = Math.max(res, val1Max + value2);
        val1Max = Math.max(val1Max, values[i] + i)
    }
    return res;
};