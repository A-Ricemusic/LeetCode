/**
 * @param {number[]} temperatures
 * @return {number[]}
                 0.  1. 2. 3. 4. 5. 6. 7
 temperatures = [73,74,75,71,69,72,76,73]
        res =   [1 ,1 ,4 ,2 ,1 ,1 ,00,00]

 [[76,6], [73,3]]
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    const res = new Array(n).fill(0);
    const stack = [];
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && temperatures[i] > stack.at(-1)[0]) {
            const [_,idx] = stack.pop()
            res[idx] = i - idx;
        }
        stack.push([temperatures[i], i])
    }

    return res;

    
};