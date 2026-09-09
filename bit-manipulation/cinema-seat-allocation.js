/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}

 {
  1: {
  0: true
  1: false
  2: true
  }
  .
  .
  .
  .
 }
 0 group: 2,3,4,5
 1 group: 4,5,6,7
 2 group: 6,7,8,9

    
    }
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
    const hashMap = new Map();
    const groupZero = new Set([2,3,4,5]);
    const groupOne = new Set([4,5,6,7]);
    const groupTwo = new Set([6,7,8,9]);
    
    for (const [row, seat] of reservedSeats) {
        let count = 3
        const groups = []
        if (groupZero.has(seat)) {
            groups.push(0);
        };
        if (groupOne.has(seat)) {
            groups.push(1);
        };
        if (groupTwo.has(seat)) {
            groups.push(2);
        }
        for (const g of groups) {
            if (!hashMap.has(row)) {
                hashMap.set(row, new Map())
            }
            hashMap.get(row).set(g, true);
        }
    }

    let res = n * 2;

    for (const i of hashMap.keys()) {
        const row = hashMap.get(i);
        const leftBlocked = row.has(0);
        const middleBlocked = row.has(1);
        const rightBlocked = row.has(2);
        if (!leftBlocked && !rightBlocked) {
           continue;
        } else if (!leftBlocked || !middleBlocked || !rightBlocked) {
            res -= 1
        } else {
            res -= 2
        }

    }


    return res;

};