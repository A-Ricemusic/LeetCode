/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let l = 0;
    let res = 0;
    let visited = new Map()

    for (let r = 0; r < fruits.length;  r++) {
        visited.set(fruits[r],(visited.get(fruits[r]) || 0) + 1)
        
        while (visited.size> 2) {
            visited.set(fruits[l], visited.get(fruits[l]) - 1)
            if (visited.get(fruits[l]) === 0) visited.delete(fruits[l])
            l++
        }
        res = Math.max(res, r - l + 1)
    }

    return res
};