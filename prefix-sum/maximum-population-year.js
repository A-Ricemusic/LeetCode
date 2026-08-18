/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
    const dates = []
    for (const [birth,death] of logs) {
        dates.push([birth, 1]);
        dates.push([death, -1]);
    }

    dates.sort()

    let pop = 0;
    let maxPop = 0;
    let maxYear = 0;
    for ([year, change] of dates) {
        pop += change
        if (pop > maxPop) {
            maxPop = pop
            maxYear = year
        }
    }

    return maxYear
    
};