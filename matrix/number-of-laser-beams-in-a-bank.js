/**
 * @param {string[]} bank
 * @return {number}

 */
var numberOfBeams = function(bank) {
    let res = 0;
    let prevRow = 0;

    for (const r of bank) {
        let currRow = 0;
        for (const c of r) {
            if (c === "1") {
                currRow++;
            }
        }
        if (currRow > 0) {
            const laserCount = currRow * prevRow;
            res += laserCount;
            prevRow = currRow
        }
    }

    return res;
};