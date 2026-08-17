function maxSubarraySum(nums: number[], k: number): number {
    let prefix: number[] = new Array(k).fill(Infinity)
    prefix[0] = 0
    let res: number = -Infinity;
    let total: number = 0;
    let length: number = 0

    for (let i = 0; i < nums.length; i++) {
        total += nums[i]
        length = i + 1
        let prefix_len = length % k
        res = Math.max(res, total - prefix[prefix_len])
        prefix[prefix_len] = Math.min(prefix[prefix_len], total)
    }


    
    return res
};