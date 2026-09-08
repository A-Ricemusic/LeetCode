/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}

 time: o(n)
 space: o(n)
 */
var maxSubarraySum = function(nums, k) {
    const NEG_INF = -Infinity;
    function divTrunc(x,k) {
        return x < 0? Math.ceil(x / k) : Math.floor(x / k);
    };

    let ans = NEG_INF;


    function solve(mult) {
        let dp0 = 0;
        let dp1 = NEG_INF;
        let dp2 = NEG_INF;

        for (const x of nums) {
            const val = mult? x * k : divTrunc(x,k);
            const ndp0 = Math.max(0,dp0) + x;
            const ndp1 = Math.max(0,dp0, dp1 === NEG_INF ? NEG_INF : dp1) + val;
            const ndp2 = (dp1 === NEG_INF && dp2 === NEG_INF) ? NEG_INF : Math.max(dp1 === NEG_INF ? NEG_INF : dp1, dp2 === NEG_INF ? NEG_INF : dp2) + x;
            ans = Math.max(ans, ndp1);
            if (ndp2 !== NEG_INF) {
                ans = Math.max(ans,ndp2);
            };
            dp0 = ndp0;
            dp1 = ndp1;
            dp2 = ndp2;
        }
    }
    solve(true);
    solve(false);
    return ans;
    
};