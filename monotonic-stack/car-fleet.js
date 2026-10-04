/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 position = [10,8,0,5,3], speed = [2,4,1,1,3]
 res = 3
 prev = 7
 [[10,2](1), [8,4](1), [5,1](7), [3,3](3), [0,1](12)]
 
 */
var carFleet = function(target, position, speed) {
    const posSpeed = [];

    for (let i = 0; i < position.length; i++) {
        posSpeed.push([position[i],speed[i]]);
    };
    
    posSpeed.sort((a,b) => b[0] - a[0]);
    let prev = -1;
    let res = position.length;
    for (const [pos, speed] of posSpeed) {
        const t = (target - pos) / speed
        if (t > prev) {
            prev = t;
        } else {
            res--;
        }
    }

    return res;
};