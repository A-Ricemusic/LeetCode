/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var distributeCoins = function(root) {
    let res = 0;

    const dfs = (curr) => {
        if (!curr) return [0,0] // [size, coins]
        const l = dfs(curr.left);
        const r = dfs(curr.right);
        const size = 1 + l[0] + r[0];
        const coins = curr.val + l[1] + r[1];
        res += Math.abs(size - coins)
        return [size,coins]
    }

    dfs(root)
    return res;
    
};