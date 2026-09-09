/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarraySum = function(nums, k) {
    const NEG_INF = -Number.MAX_SAFE_INTEGER;
    function divtrunc(x, k) {
        return x > 0? Math.floor(x / k) : Math.ceil(x / k);
    };

    let ans = NEG_INF;
    function solve(multiply) {
        let dp0 = 0;
        let dp1 = NEG_INF;
        let dp2 = NEG_INF;

        for (const x of nums) {
            const val = multiply? x * k : divtrunc(x,k);
            const ndp0 = Math.max(0,dp0) + x;
            const ndp1 = Math.max(0, dp0, dp1) + val;
            const bestPrevious = Math.max(dp1, dp2);
            const ndp2 = bestPrevious === NEG_INF ? NEG_INF : bestPrevious + x;
            ans = Math.max(ans, ndp1);
            if (ndp2 !== NEG_INF) ans = Math.max(ans, ndp2);
            dp0 = ndp0;
            dp1 = ndp1;
            dp2 = ndp2;
        }


    }

    solve(true);
    solve(false);

    return ans;
};