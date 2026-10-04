/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 firstList = [[0,2],[5,10],[13,23],[24,25]]
 secondList = [[1,5],[8,12],[15,24],[25,26]]

 {
 
 
 }
 */
var intervalIntersection = function(firstList, secondList) {
    const res = []
    let i = 0;
    let j = 0;
    while (i < firstList.length && j < secondList.length) {
        const lo = Math.max(firstList[i][0], secondList[j][0])
        const hi = Math.min(firstList[i][1], secondList[j][1])
        if (lo <= hi) {
            res.push([lo,hi])
        }

        if (firstList[i][1] < secondList[j][1]) {
            i++;
        } else {
            j++;
        }
    }

    return res
    
};