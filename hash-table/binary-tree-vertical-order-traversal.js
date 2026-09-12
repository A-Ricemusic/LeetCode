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
 * @return {number[][]}
 hashMap = {
 0: [3,0,1]
 -1: [9]
 -2: [4]
 1: [8]
 2: [7]
 }
 
 */
var verticalOrder = function(root) {
    const hashMap = new Map()

    const preorder = (curr, pos) => {
        if (!curr) return;
        if (!hashMap.has(pos)) {
            hashMap.set(pos, [])
        }
        hashMap.get(pos).push(curr.val)
        preorder(curr.left, pos - 1)
        preorder(curr.right, pos + 1)
    }

    dfs(root,0)
    const entries = [...hashMap.entries()].sort((a,b) => a[0] - b[0]);

    const res = []
    for (const [k,v] of entries) {
        res.push(v)
    }

    return res;
};