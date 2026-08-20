/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {

    if (start > destination) {
        let tmp = start
        start = destination
        destination = tmp
    }

    let res = 0
    let total = 0

    for (let i = 0; i < distance.length; i++) {
        if (i >= start && i < destination) {
            res += distance[i]
        }
        total += distance[i]
    }

    return Math.min(res, total - res)
    
};