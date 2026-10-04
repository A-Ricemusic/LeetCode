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
 * @return {boolean}
 */
var evaluateTree = function(root) {

    const dfs = (curr) => {
        if (curr.val === 0) return false;
        if (curr.val === 1) return true;
        const l = dfs(curr.left);
        const r = dfs(curr.right);
        return curr.val === 2? l || r : l && r;
        
    }
    return dfs(root)
};