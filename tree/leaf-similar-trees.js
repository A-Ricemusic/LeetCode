/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const l1 = []
    const l2 = []

    const dfs = (node, arr) => {
        if (!node) return;
        dfs(node.left,arr);
        if (!node.left && !node.right) {
            arr.push(node.val)
        }
        dfs(node.right,arr);
    }


    dfs(root1, l1)
    dfs(root2,l2)

    if (l1.length !== l2.length) return false;
    for (let i = 0; i < l1.length; i++) {
        if (l1[i] !== l2[i]) return false;
    }

    return true;
    
};