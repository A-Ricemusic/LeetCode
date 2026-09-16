/**
 * @param {number[]} heights
 * @return {number}

 */
var largestRectangleArea = function(heights) {
    let res = 0;
    const stack = [];
    for (let i = 0; i < heights.length; i++) {
        let idx = i;
        while (stack.length > 0 && stack.at(-1)[0] > heights[i]) {
            const [h1,idx2] = stack.pop()
            res = Math.max(h1 * (i - idx2), res)
            idx = idx2
        }
        stack.push([heights[i], idx])
    }

    while (stack.length > 0) {
        const [h,idx] = stack.pop()
        res = Math.max(h * (heights.length - idx), res)
    }

    return res;
};