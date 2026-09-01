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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function(root, distance) {
    let res = 0;
    const dfs = (curr) => {
        if (!curr) return [];
        if (!curr.left && !curr.right) return [0]
        const l = dfs(curr.left) 
        const r = dfs(curr.right)
        const arr = []
        for (const n1 of l) {
            for (const n2 of r) {
                if (n1 + n2 + 2 <= distance) {
                    res++;
                }
            }
        }

        for (const n1 of l) {
            arr.push(n1 + 1)
        }

        for (const n2 of r) {
            arr.push(n2 + 1)
        }
        
        return arr
    }

    dfs(root)
    return res;
};