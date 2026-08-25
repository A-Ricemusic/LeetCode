/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    const turnLeft = {
        "N": "W",
        "W": "S",
        "S": "E",
        "E": "N"
    }

    const turnRight = {
        "N": "E",
        "E": "S",
        "S": "W",
        "W": "N"
    }

    let dirs = "N"
    let res = [0,0]

    for (const char of instructions) {
        if (char === "G") {
            if (dirs === "N") {
                res[1] += 1;
            } else if (dirs === "S") {
                res[1] -= 1;
            } else if (dirs === "E") {
                res[0] += 1;
            } else if (dirs === "W") {
                res[0] -= 1;
            }
        } else if (char === "L") {
            dirs = turnLeft[dirs]
        } else {
            dirs = trunRight[dirs]
        }
    }

    return (res[0] === 0 && res[1] === 0) || dirs !== "N"

    
};