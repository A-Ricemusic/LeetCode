/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let l = 0;
    let res = 0;
    let visited = new Set()

    for (let r = 0; r < fruits.length;  r++) {
        if (!visited.has(fruits[r])) {
            visited.add(fruits[r])
        }
        if (visited.size > 2) {
            visited.delete(fruits[l]);
            l++;
        }
        res = Math.max(res, r - l + 1)
    }

    return res
};