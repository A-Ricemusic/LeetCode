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
    for (let i = 1; i <= n; i++) {
        hashMap.set(i, new Map());
        for (let j = 0; j < 3; j++) {
            hashMap.get(i).set(j, false)
        };
    };

    
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
            hashMap.get(row).set(g, true);
        }
    }

    let res = 0;

    for (let i = 1; i <= n; i++) {
        const row = hashMap.get(i);
        const leftBlocked = row.get(0);
        const middleBlocked = row.get(1);
        const rightBlocked = row.get(2);

        // Left and right don't overlap, so both can be used.
        if (!leftBlocked && !rightBlocked) {
            res += 2;
        }
        // Otherwise, if at least one group works, we get 1 family.
        else if (!leftBlocked || !middleBlocked || !rightBlocked) {
            res += 1;
        }
    }

    return res;


    
};